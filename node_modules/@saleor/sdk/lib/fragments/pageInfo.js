"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageInfo = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.pageInfo = graphql_tag_1.default `
  fragment PageInfo on PageInfo {
    endCursor
    hasNextPage
  }
`;
//# sourceMappingURL=pageInfo.js.map