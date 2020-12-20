"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionFragment = exports.baseCollectionFragment = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.baseCollectionFragment = graphql_tag_1.default `
  fragment BaseCollection on Collection {
    id
    name
    slug
    seoDescription
    seoTitle
  }
`;
exports.collectionFragment = graphql_tag_1.default `
  ${exports.baseCollectionFragment}
  fragment CollectionDetails on Collection {
    ...BaseCollection
    backgroundImage {
      alt
      url
    }
    description
    descriptionJson
  }
`;
//# sourceMappingURL=collections.js.map