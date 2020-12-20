"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDetailFragment = exports.orderPriceFragment = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const checkout_1 = require("./checkout");
exports.orderPriceFragment = graphql_tag_1.default `
  fragment OrderPrice on TaxedMoney {
    gross {
      amount
      currency
    }
    net {
      amount
      currency
    }
  }
`;
exports.orderDetailFragment = graphql_tag_1.default `
  ${exports.orderPriceFragment}
  ${checkout_1.checkoutAddressFragment}
  ${checkout_1.checkoutProductVariantFragment}
  fragment OrderDetail on Order {
    userEmail
    paymentStatus
    paymentStatusDisplay
    status
    statusDisplay
    id
    token
    number
    shippingAddress {
      ...Address
    }
    lines {
      productName
      quantity
      variant {
        ...ProductVariant
      }
      unitPrice {
        currency
        ...OrderPrice
      }
      totalPrice {
        currency
        ...OrderPrice
      }
    }
    subtotal {
      ...OrderPrice
    }
    total {
      ...OrderPrice
    }
    shippingPrice {
      ...OrderPrice
    }
  }
`;
//# sourceMappingURL=order.js.map