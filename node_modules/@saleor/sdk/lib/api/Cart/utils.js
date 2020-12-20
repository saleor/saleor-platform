"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortCheckoutLines = void 0;
function sortCheckoutLines(a, b) {
    var _a, _b, _c, _d;
    if (a.id && b.id) {
        const aId = ((_a = a.id) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "";
        const bId = ((_b = b.id) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || "";
        return aId < bId ? -1 : aId > bId ? 1 : 0;
    }
    const aId = ((_c = a.variant.id) === null || _c === void 0 ? void 0 : _c.toUpperCase()) || "";
    const bId = ((_d = b.variant.id) === null || _d === void 0 ? void 0 : _d.toUpperCase()) || "";
    return aId < bId ? -1 : aId > bId ? 1 : 0;
}
exports.sortCheckoutLines = sortCheckoutLines;
//# sourceMappingURL=utils.js.map