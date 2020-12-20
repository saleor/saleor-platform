"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeCheckoutMutation = exports.createCheckoutPaymentMutation = exports.removeCheckoutPromoCode = exports.addCheckoutPromoCode = exports.updateCheckoutShippingMethodMutation = exports.updateCheckoutShippingAddressMutation = exports.updateCheckoutBillingAddressMutation = exports.updateCheckoutBillingAddressWithEmailMutation = exports.createCheckoutMutation = exports.updateCheckoutLineMutation = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const checkout_1 = require("../fragments/checkout");
const payment_1 = require("../fragments/payment");
const order_1 = require("../fragments/order");
const errors_1 = require("../fragments/errors");
exports.updateCheckoutLineMutation = graphql_tag_1.default `
  ${checkout_1.checkoutFragment}
  ${errors_1.checkoutErrorFragment}
  mutation UpdateCheckoutLine($checkoutId: ID!, $lines: [CheckoutLineInput]!) {
    checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;
exports.createCheckoutMutation = graphql_tag_1.default `
  ${checkout_1.checkoutFragment}
  ${errors_1.checkoutErrorFragment}
  mutation CreateCheckout($checkoutInput: CheckoutCreateInput!) {
    checkoutCreate(input: $checkoutInput) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
        ...Checkout
      }
    }
  }
`;
exports.updateCheckoutBillingAddressWithEmailMutation = graphql_tag_1.default `
  ${checkout_1.checkoutFragment}
  ${errors_1.checkoutErrorFragment}
  mutation UpdateCheckoutBillingAddressWithEmail(
    $checkoutId: ID!
    $billingAddress: AddressInput!
    $email: String!
  ) {
    checkoutBillingAddressUpdate(
      checkoutId: $checkoutId
      billingAddress: $billingAddress
    ) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
        ...Checkout
      }
    }
    checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        code
        field
        message
      }
    }
  }
`;
exports.updateCheckoutBillingAddressMutation = graphql_tag_1.default `
  ${checkout_1.checkoutFragment}
  ${errors_1.checkoutErrorFragment}
  mutation UpdateCheckoutBillingAddress(
    $checkoutId: ID!
    $billingAddress: AddressInput!
  ) {
    checkoutBillingAddressUpdate(
      checkoutId: $checkoutId
      billingAddress: $billingAddress
    ) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
        ...Checkout
      }
    }
  }
`;
exports.updateCheckoutShippingAddressMutation = graphql_tag_1.default `
  ${checkout_1.checkoutFragment}
  ${errors_1.checkoutErrorFragment}
  mutation UpdateCheckoutShippingAddress(
    $checkoutId: ID!
    $shippingAddress: AddressInput!
    $email: String!
  ) {
    checkoutShippingAddressUpdate(
      checkoutId: $checkoutId
      shippingAddress: $shippingAddress
    ) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
        ...Checkout
      }
    }
    checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;
exports.updateCheckoutShippingMethodMutation = graphql_tag_1.default `
  ${checkout_1.checkoutFragment}
  ${errors_1.checkoutErrorFragment}
  mutation UpdateCheckoutShippingMethod(
    $checkoutId: ID!
    $shippingMethodId: ID!
  ) {
    checkoutShippingMethodUpdate(
      checkoutId: $checkoutId
      shippingMethodId: $shippingMethodId
    ) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;
exports.addCheckoutPromoCode = graphql_tag_1.default `
  ${checkout_1.checkoutFragment}
  ${errors_1.checkoutErrorFragment}
  mutation AddCheckoutPromoCode($checkoutId: ID!, $promoCode: String!) {
    checkoutAddPromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;
exports.removeCheckoutPromoCode = graphql_tag_1.default `
  ${checkout_1.checkoutFragment}
  ${errors_1.checkoutErrorFragment}
  mutation RemoveCheckoutPromoCode($checkoutId: ID!, $promoCode: String!) {
    checkoutRemovePromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;
exports.createCheckoutPaymentMutation = graphql_tag_1.default `
  ${checkout_1.checkoutFragment}
  ${payment_1.paymentFragment}
  ${errors_1.paymentErrorFragment}
  mutation CreateCheckoutPayment(
    $checkoutId: ID!
    $paymentInput: PaymentInput!
  ) {
    checkoutPaymentCreate(checkoutId: $checkoutId, input: $paymentInput) {
      checkout {
        ...Checkout
      }
      payment {
        ...Payment
      }
      errors: paymentErrors {
        ...PaymentError
      }
    }
  }
`;
exports.completeCheckoutMutation = graphql_tag_1.default `
  ${order_1.orderDetailFragment}
  ${errors_1.checkoutErrorFragment}
  mutation CompleteCheckout(
    $checkoutId: ID!
    $paymentData: JSONString
    $redirectUrl: String
    $storeSource: Boolean
  ) {
    checkoutComplete(
      checkoutId: $checkoutId
      paymentData: $paymentData
      redirectUrl: $redirectUrl
      storeSource: $storeSource
    ) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      order {
        ...OrderDetail
      }
      confirmationNeeded
      confirmationData
    }
  }
`;
//# sourceMappingURL=checkout.js.map