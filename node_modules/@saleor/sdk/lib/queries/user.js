"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDetailsQuery = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const auth_1 = require("../fragments/auth");
exports.getUserDetailsQuery = graphql_tag_1.default `
  ${auth_1.userFragment}
  query UserDetails {
    me {
      ...User
    }
  }
`;
//# sourceMappingURL=user.js.map