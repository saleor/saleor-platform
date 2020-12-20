"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionDetails = exports.collections = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const collections_1 = require("../fragments/collections");
const pageInfo_1 = require("../fragments/pageInfo");
exports.collections = graphql_tag_1.default `
  ${collections_1.baseCollectionFragment}
  ${pageInfo_1.pageInfo}
  query CollectionList(
    $first: Int!
    $after: String
    $sortBy: CollectionSortingInput
    $filter: CollectionFilterInput
  ) {
    collections(
      first: $first
      after: $after
      sortBy: $sortBy
      filter: $filter
    ) {
      edges {
        node {
          ...BaseCollection
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
`;
exports.collectionDetails = graphql_tag_1.default `
  ${collections_1.collectionFragment}
  query CollectionDetails($id: ID, $slug: String) {
    collection(id: $id, slug: $slug) {
      ...CollectionDetails
    }
  }
`;
//# sourceMappingURL=collections.js.map