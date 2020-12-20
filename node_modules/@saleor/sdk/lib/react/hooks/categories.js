"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCategoryDetails = exports.useCategoryChildrenList = exports.useCategoryAncestorsList = exports.useCategoryList = void 0;
const CategoryDetails_1 = require("../../api/categories/CategoryDetails");
const CategoryAncestorsList_1 = require("../../api/categories/CategoryAncestorsList");
const CategoryChildrenList_1 = require("../../api/categories/CategoryChildrenList");
const CategoryList_1 = require("../../api/categories/CategoryList");
const utils_1 = require("./utils");
exports.useCategoryList = utils_1.makeList(client => new CategoryList_1.CategoryList(client));
exports.useCategoryAncestorsList = utils_1.makeList(client => new CategoryAncestorsList_1.CategoryAncestorsList(client));
exports.useCategoryChildrenList = utils_1.makeList(client => new CategoryChildrenList_1.CategoryChildrenList(client));
exports.useCategoryDetails = utils_1.makeDetails(client => new CategoryDetails_1.CategoryDetails(client));
//# sourceMappingURL=categories.js.map