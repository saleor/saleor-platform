"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryFragment = exports.baseCategoryFragment = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.baseCategoryFragment = graphql_tag_1.default `
  fragment BaseCategory on Category {
    id
    name
    slug
    seoDescription
    seoTitle
  }
`;
exports.categoryFragment = graphql_tag_1.default `
  ${exports.baseCategoryFragment}
  fragment CategoryDetails on Category {
    ...BaseCategory
    backgroundImage {
      alt
      url
    }
    description
    descriptionJson
  }
`;
//# sourceMappingURL=categories.js.map