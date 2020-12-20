"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCart = exports.useCheckout = exports.useAuth = void 0;
const useHook_1 = require("./useHook");
exports.useAuth = useHook_1.hookFactory("auth");
exports.useCheckout = useHook_1.hookFactory("checkout");
exports.useCart = useHook_1.hookFactory("cart");
//# sourceMappingURL=hooks.js.map