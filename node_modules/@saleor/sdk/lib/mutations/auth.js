"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenRefreshMutation = exports.tokenVeryficationMutation = exports.tokenAuthMutation = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const errors_1 = require("../fragments/errors");
exports.tokenAuthMutation = graphql_tag_1.default `
  ${errors_1.accountErrorFragment}
  mutation TokenAuth($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      csrfToken
      refreshToken
      token
      errors: accountErrors {
        ...AccountError
      }
      user {
        id
      }
    }
  }
`;
exports.tokenVeryficationMutation = graphql_tag_1.default `
  ${errors_1.accountErrorFragment}
  mutation VerifyToken($token: String!) {
    tokenVerify(token: $token) {
      isValid
      payload
      user {
        id
      }
      errors: accountErrors {
        ...AccountError
      }
    }
  }
`;
exports.tokenRefreshMutation = graphql_tag_1.default `
  ${errors_1.accountErrorFragment}
  mutation RefreshToken($csrfToken: String, $refreshToken: String) {
    tokenRefresh(csrfToken: $csrfToken, refreshToken: $refreshToken) {
      token
      user {
        id
      }
      errors: accountErrors {
        ...AccountError
      }
    }
  }
`;
//# sourceMappingURL=auth.js.map