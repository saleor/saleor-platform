"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryDetails = exports.categoryAncestorsList = exports.categoryChildrenList = exports.categoryList = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const pageInfo_1 = require("../fragments/pageInfo");
const categories_1 = require("../fragments/categories");
exports.categoryList = graphql_tag_1.default `
  ${categories_1.baseCategoryFragment}
  ${pageInfo_1.pageInfo}
  query CategoryList($first: Int!, $after: String) {
    categories(first: $first, after: $after) {
      edges {
        node {
          ...BaseCategory
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
`;
exports.categoryChildrenList = graphql_tag_1.default `
  ${categories_1.baseCategoryFragment}
  ${pageInfo_1.pageInfo}
  query CategoryChildrenList($id: ID!, $first: Int!, $after: String) {
    category(id: $id) {
      id
      children(first: $first, after: $after) {
        edges {
          node {
            ...BaseCategory
          }
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
`;
exports.categoryAncestorsList = graphql_tag_1.default `
  ${categories_1.baseCategoryFragment}
  ${pageInfo_1.pageInfo}
  query CategoryAncestorsList($id: ID!, $first: Int!, $after: String) {
    category(id: $id) {
      id
      ancestors(first: $first, after: $after) {
        edges {
          node {
            ...BaseCategory
          }
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
`;
exports.categoryDetails = graphql_tag_1.default `
  ${categories_1.categoryFragment}
  query CategoryDetails($id: ID, $slug: String) {
    category(id: $id, slug: $slug) {
      ...CategoryDetails
    }
  }
`;
//# sourceMappingURL=category.js.map