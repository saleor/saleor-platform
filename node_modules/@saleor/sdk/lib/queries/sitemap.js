"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollectionsQuery = exports.getCategoriesQuery = exports.getProductsQuery = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.getProductsQuery = graphql_tag_1.default `
  query GetProducts($cursor: String, $perPage: Int) {
    products(after: $cursor, first: $perPage) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
exports.getCategoriesQuery = graphql_tag_1.default `
  query GetCategories($cursor: String, $perPage: Int) {
    categories(after: $cursor, first: $perPage) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
exports.getCollectionsQuery = graphql_tag_1.default `
  query GetCollections($cursor: String, $perPage: Int) {
    collections(after: $cursor, first: $perPage) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
//# sourceMappingURL=sitemap.js.map