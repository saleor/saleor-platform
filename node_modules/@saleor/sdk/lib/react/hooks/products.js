"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProductDetails = exports.useProductList = void 0;
const ProductDetails_1 = require("../../api/products/ProductDetails");
const ProductList_1 = require("../../api/products/ProductList");
const utils_1 = require("./utils");
exports.useProductList = utils_1.makeList(client => new ProductList_1.ProductList(client));
exports.useProductDetails = utils_1.makeDetails(client => new ProductDetails_1.ProductDetails(client));
//# sourceMappingURL=products.js.map