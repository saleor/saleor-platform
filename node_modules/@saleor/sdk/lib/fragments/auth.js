"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFragment = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const checkout_1 = require("./checkout");
exports.userFragment = graphql_tag_1.default `
  ${checkout_1.checkoutAddressFragment}
  fragment User on User {
    id
    email
    firstName
    lastName
    isStaff
    defaultShippingAddress {
      ...Address
    }
    defaultBillingAddress {
      ...Address
    }
    addresses {
      ...Address
    }
  }
`;
//# sourceMappingURL=auth.js.map