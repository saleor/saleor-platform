"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceFragment = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.invoiceFragment = graphql_tag_1.default `
  fragment InvoiceFragment on Invoice {
    id
    number
    createdAt
    url
    status
  }
`;
//# sourceMappingURL=invoice.js.map