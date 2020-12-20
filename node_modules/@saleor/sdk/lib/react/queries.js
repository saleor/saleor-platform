"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVariantsProducts = exports.useAtrributes = exports.useOrdersByUser = exports.useOrderDetails = exports.useShopDetails = void 0;
const useQuery_1 = require("./useQuery");
exports.useShopDetails = useQuery_1.queryFactory("getShopDetails");
exports.useOrderDetails = useQuery_1.queryWithVariablesFactory("getOrderDetails");
exports.useOrdersByUser = useQuery_1.queryWithVariablesFactory("getOrdersByUser");
exports.useAtrributes = useQuery_1.queryWithVariablesFactory("getAttributes");
exports.useVariantsProducts = useQuery_1.queryWithVariablesFactory("getVariantsProducts");
//# sourceMappingURL=queries.js.map