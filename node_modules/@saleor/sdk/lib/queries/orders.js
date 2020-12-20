"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userOrderDetailsByTokenQuery = exports.orderDetailsByTokenQuery = exports.ordersByUser = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const order_1 = require("../fragments/order");
const invoice_1 = require("../fragments/invoice");
exports.ordersByUser = graphql_tag_1.default `
  query OrdersByUser($perPage: Int!, $after: String) {
    me {
      id
      orders(first: $perPage, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            token
            number
            statusDisplay
            created
            total {
              gross {
                amount
                currency
              }
              net {
                amount
                currency
              }
            }
            lines {
              id
              variant {
                id
                product {
                  name
                  id
                }
              }
              thumbnail {
                alt
                url
              }
              thumbnail2x: thumbnail(size: 510) {
                url
              }
            }
          }
        }
      }
    }
  }
`;
exports.orderDetailsByTokenQuery = graphql_tag_1.default `
  ${order_1.orderDetailFragment}
  query OrderByToken($token: UUID!) {
    orderByToken(token: $token) {
      ...OrderDetail
    }
  }
`;
exports.userOrderDetailsByTokenQuery = graphql_tag_1.default `
  ${order_1.orderDetailFragment}
  ${invoice_1.invoiceFragment}
  query UserOrderByToken($token: UUID!) {
    orderByToken(token: $token) {
      ...OrderDetail
      invoices {
        ...InvoiceFragment
      }
    }
  }
`;
//# sourceMappingURL=orders.js.map