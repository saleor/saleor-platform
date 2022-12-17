import { ApolloQueryResult } from "@apollo/client";
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React, { ReactElement } from "react";

import { Layout } from "@/components";
import { BaseSeo } from "@/components/seo/BaseSeo";
import { HOMEPAGE_MENU } from "@/lib/const";
import apolloClient from "@/lib/graphql";
import { contextToRegionQuery } from "@/lib/regions";
import {
  HomepageBlocksQuery,
  HomepageBlocksQueryDocument,
  HomepageBlocksQueryVariables,
} from "@/saleor/api";
import Link from "next/link";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const result: ApolloQueryResult<HomepageBlocksQuery> = await apolloClient.query<
    HomepageBlocksQuery,
    HomepageBlocksQueryVariables
  >({
    query: HomepageBlocksQueryDocument,
    variables: { slug: HOMEPAGE_MENU, ...contextToRegionQuery(context) },
  });
  return {
    props: {
      menuData: result?.data,
    },
    revalidate: 60 * 60,
  };
};

function Gallery({}: InferGetStaticPropsType<typeof getStaticProps>) {
  const shopName = "KW Striping";
  const shopDescription = "We paint fields.";
  const catalogCta = "Request service";
  return (
    <>
      <BaseSeo />
      <main className="container h-full">
        <div id="bg" className="h-full w-full flex flex-col items-center justify-center">
          <h1 className="text-center text-white">{`Welcome to ${shopName}`}</h1>
          <p className="lead text-center text-white my-4">{shopDescription}</p>
          <p className="text-center">
            <Link href="/catalog" className="btn btn-primary px-3">
              {catalogCta}
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

export default Gallery;

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});

Gallery.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
