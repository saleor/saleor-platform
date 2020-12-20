"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountErrorFragment = exports.paymentErrorFragment = exports.checkoutErrorFragment = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.checkoutErrorFragment = graphql_tag_1.default `
  fragment CheckoutError on CheckoutError {
    code
    field
    message
  }
`;
exports.paymentErrorFragment = graphql_tag_1.default `
  fragment PaymentError on PaymentError {
    code
    field
    message
  }
`;
exports.accountErrorFragment = graphql_tag_1.default `
  fragment AccountError on AccountError {
    code
    field
    message
  }
`;
//# sourceMappingURL=errors.js.map