"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hookFactory = void 0;
const helpers_1 = require("./helpers");
const useHook = (dataName) => {
    const saleor = helpers_1.useSaleorClient();
    const getHookData = () => {
        return saleor[dataName];
    };
    return getHookData();
};
exports.hookFactory = (query) => () => useHook(query);
//# sourceMappingURL=useHook.js.map