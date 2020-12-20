"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantsProducts = exports.productDetails = exports.productList = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const pageInfo_1 = require("../fragments/pageInfo");
const products_1 = require("../fragments/products");
exports.productList = graphql_tag_1.default `
  ${products_1.baseProductFragment}
  ${products_1.productPricingFragment}
  ${pageInfo_1.pageInfo}
  query ProductList(
    $after: String
    $first: Int!
    $sortBy: ProductOrder
    $filter: ProductFilterInput
  ) {
    products(after: $after, first: $first, sortBy: $sortBy, filter: $filter) {
      edges {
        node {
          ...BaseProduct
          ...ProductPricingField
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
`;
exports.productDetails = graphql_tag_1.default `
  ${products_1.productFragment}
  query ProductDetails($id: ID, $slug: String, $countryCode: CountryCode) {
    product(id: $id, slug: $slug) {
      ...ProductDetails
    }
  }
`;
exports.variantsProducts = graphql_tag_1.default `
  query VariantsProducts($ids: [ID]) {
    productVariants(ids: $ids, first: 100) {
      edges {
        node {
          id
          product {
            id
            productType {
              isShippingRequired
            }
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=products.js.map