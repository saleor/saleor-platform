import { BatchHttpLink } from "apollo-link-batch-http";
import { setupPolly } from "setup-polly-jest";
import { Polly } from "@pollyjs/core";
import fetch from "node-fetch";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import path from "path";
import { RetryLink } from "apollo-link-retry";
import {
  createSaleorCache,
  createSaleorClient,
  invalidTokenLinkWithTokenHandler,
  authLink,
} from "../src/index";

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

export function setupRecording() {
  setupPolly({
    adapterOptions: {
      fetch: {
        context: global,
      },
    },
    adapters: ["node-http"],
    matchRequestsBy: {
      headers: false,
      url: {
        hash: false,
        hostname: false,
        password: false,
        pathname: false,
        port: false,
        protocol: false,
        query: false,
        username: false,
      },
    },
    persister: "fs",
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, "../recordings"),
      },
    },
    recordIfMissing: true,
  });
}

export async function setupAPI() {
  const cache = await createSaleorCache({ persistCache: true });
  const apiUrl = process.env.API_URL || "http://localhost:8000/graphql/";
  const invalidTokenLink = invalidTokenLinkWithTokenHandler(() => null);
  const links = [
    invalidTokenLink,
    authLink,
    new RetryLink(),
    new BatchHttpLink({
      // @ts-ignore
      fetch,
      uri: apiUrl,
    }),
  ];
  const client = createSaleorClient(cache, links);

  return { apiUrl, cache, client };
}
