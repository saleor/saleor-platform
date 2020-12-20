"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageManager = void 0;
class LocalStorageManager {
    constructor(handler, saleorState) {
        this.getHandler = () => {
            return this.handler;
        };
        this.addItemToCart = (variantId, quantity) => {
            var _a;
            const lines = ((_a = this.saleorState.checkout) === null || _a === void 0 ? void 0 : _a.lines) || [];
            let variantInCheckout = lines.find(variant => variant.variant.id === variantId);
            const alteredLines = lines.filter(variant => variant.variant.id !== variantId);
            const newVariantQuantity = variantInCheckout
                ? variantInCheckout.quantity + quantity
                : quantity;
            if (variantInCheckout) {
                variantInCheckout.quantity = newVariantQuantity;
                alteredLines.push(variantInCheckout);
            }
            else {
                variantInCheckout = {
                    quantity,
                    variant: {
                        id: variantId,
                    },
                };
                alteredLines.push(variantInCheckout);
            }
            const alteredCheckout = this.saleorState.checkout
                ? Object.assign(Object.assign({}, this.saleorState.checkout), { lines: alteredLines }) : {
                lines: alteredLines,
            };
            this.handler.setCheckout(alteredCheckout);
            return alteredCheckout;
        };
        this.removeItemFromCart = (variantId) => {
            var _a;
            const lines = ((_a = this.saleorState.checkout) === null || _a === void 0 ? void 0 : _a.lines) || [];
            const variantInCheckout = lines.find(variant => variant.variant.id === variantId);
            const alteredLines = lines.filter(variant => variant.variant.id !== variantId);
            if (variantInCheckout) {
                variantInCheckout.quantity = 0;
                alteredLines.push(variantInCheckout);
            }
            const alteredCheckout = this.saleorState.checkout
                ? Object.assign(Object.assign({}, this.saleorState.checkout), { lines: alteredLines }) : {
                lines: alteredLines,
            };
            this.handler.setCheckout(alteredCheckout);
            return alteredCheckout;
        };
        this.subtractItemFromCart = (variantId) => {
            var _a;
            const lines = ((_a = this.saleorState.checkout) === null || _a === void 0 ? void 0 : _a.lines) || [];
            const variantFromCart = lines.find(variant => variant.variant.id === variantId);
            const alteredLines = lines.filter(variant => variant.variant.id !== variantId);
            const newVariantQuantity = variantFromCart
                ? variantFromCart.quantity - 1
                : 0;
            if (variantFromCart) {
                variantFromCart.quantity = newVariantQuantity;
                alteredLines.push(variantFromCart);
            }
            const alteredCheckout = this.saleorState.checkout
                ? Object.assign(Object.assign({}, this.saleorState.checkout), { lines: alteredLines }) : {
                lines: alteredLines,
            };
            this.handler.setCheckout(alteredCheckout);
            return alteredCheckout;
        };
        this.updateItemInCart = (variantId, quantity) => {
            var _a;
            const lines = ((_a = this.saleorState.checkout) === null || _a === void 0 ? void 0 : _a.lines) || [];
            const variantInCheckout = lines.find(variant => variant.variant.id === variantId);
            const alteredLines = lines.filter(variant => variant.variant.id !== variantId);
            if (variantInCheckout) {
                variantInCheckout.quantity = quantity;
                alteredLines.push(variantInCheckout);
            }
            const alteredCheckout = this.saleorState.checkout
                ? Object.assign(Object.assign({}, this.saleorState.checkout), { lines: alteredLines }) : {
                lines: alteredLines,
            };
            this.handler.setCheckout(alteredCheckout);
            return alteredCheckout;
        };
        this.handler = handler;
        this.saleorState = saleorState;
    }
}
exports.LocalStorageManager = LocalStorageManager;
//# sourceMappingURL=index.js.map