"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attributes = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.attributes = graphql_tag_1.default `
  query Attributes($id: ID!) {
    attributes(filter: { inCategory: $id }, first: 100) {
      edges {
        node {
          id
          name
          slug
          values {
            id
            name
            slug
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=attributes.js.map