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
exports.CategoriesAPI = void 0;
const CategoryList_1 = require("./CategoryList");
const CategoryAncestorsList_1 = require("./CategoryAncestorsList");
const CategoryChildrenList_1 = require("./CategoryChildrenList");
const CategoryDetails_1 = require("./CategoryDetails");
class CategoriesAPI {
    constructor(client) {
        /**
         * Method returning category details
         * @param variables Details parameters
         */
        this.getDetails = (variables) => __awaiter(this, void 0, void 0, function* () {
            const details = new CategoryDetails_1.CategoryDetails(this.client);
            yield details.init(variables);
            return details;
        });
        /**
         * Method returning list of categories with ability to request next page
         * @param params List parameters
         */
        this.getList = (variables) => __awaiter(this, void 0, void 0, function* () {
            const list = new CategoryList_1.CategoryList(this.client);
            yield list.init(variables);
            return list;
        });
        this.getAncestors = (variables) => __awaiter(this, void 0, void 0, function* () {
            const list = new CategoryAncestorsList_1.CategoryAncestorsList(this.client);
            yield list.init(variables);
            return list;
        });
        this.getChildren = (variables) => __awaiter(this, void 0, void 0, function* () {
            const list = new CategoryChildrenList_1.CategoryChildrenList(this.client);
            yield list.init(variables);
            return list;
        });
        this.client = client;
    }
}
exports.CategoriesAPI = CategoriesAPI;
//# sourceMappingURL=categories.js.map