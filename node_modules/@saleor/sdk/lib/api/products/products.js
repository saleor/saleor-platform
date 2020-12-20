"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsAPI = void 0;
const ProductDetails_1 = require("./ProductDetails");
const ProductList_1 = require("./ProductList");
class ProductsAPI {
    constructor(client) {
        /**
         * Method returning product details
         * @param variables Details parameters
         */
        this.getDetails = (variables) => __awaiter(this, void 0, void 0, function* () {
            const details = new ProductDetails_1.ProductDetails(this.client);
            yield details.init(variables);
            return details;
        });
        /**
         * Method returning list of products with ability to request next page
         * @param params List parameters
         */
        this.getList = (variables) => __awaiter(this, void 0, void 0, function* () {
            const list = new ProductList_1.ProductList(this.client);
            yield list.init(variables);
            return list;
        });
        this.client = client;
    }
}
exports.ProductsAPI = ProductsAPI;
//# sourceMappingURL=products.js.map