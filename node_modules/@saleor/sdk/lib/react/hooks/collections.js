"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCollectionDetails = exports.useCollectionList = void 0;
const CollectionDetails_1 = require("../../api/collections/CollectionDetails");
const CollectionList_1 = require("../../api/collections/CollectionList");
const utils_1 = require("./utils");
exports.useCollectionList = utils_1.makeList(client => new CollectionList_1.CollectionList(client));
exports.useCollectionDetails = utils_1.makeDetails(client => new CollectionDetails_1.CollectionDetails(client));
//# sourceMappingURL=collections.js.map