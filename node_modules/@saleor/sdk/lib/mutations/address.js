"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserAddress = exports.createUserAddress = exports.deleteUserAddress = exports.setCustomerDefaultAddress = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const errors_1 = require("../fragments/errors");
const auth_1 = require("../fragments/auth");
exports.setCustomerDefaultAddress = graphql_tag_1.default `
  ${auth_1.userFragment}
  ${errors_1.accountErrorFragment}
  mutation SetCustomerDefaultAddress($id: ID!, $type: AddressTypeEnum!) {
    accountSetDefaultAddress(id: $id, type: $type) {
      errors: accountErrors {
        ...AccountError
      }
      user {
        ...User
      }
    }
  }
`;
exports.deleteUserAddress = graphql_tag_1.default `
  ${auth_1.userFragment}
  ${errors_1.accountErrorFragment}
  mutation DeleteUserAddress($addressId: ID!) {
    accountAddressDelete(id: $addressId) {
      errors: accountErrors {
        ...AccountError
      }
      user {
        ...User
      }
    }
  }
`;
exports.createUserAddress = graphql_tag_1.default `
  ${auth_1.userFragment}
  ${errors_1.accountErrorFragment}
  mutation CreateUserAddress($input: AddressInput!) {
    accountAddressCreate(input: $input) {
      errors: accountErrors {
        ...AccountError
      }
      user {
        ...User
      }
    }
  }
`;
exports.updateUserAddress = graphql_tag_1.default `
  ${auth_1.userFragment}
  ${errors_1.accountErrorFragment}
  mutation UpdateUserAddress($input: AddressInput!, $id: ID!) {
    accountAddressUpdate(input: $input, id: $id) {
      errors: accountErrors {
        ...AccountError
      }
      user {
        ...User
      }
    }
  }
`;
//# sourceMappingURL=address.js.map