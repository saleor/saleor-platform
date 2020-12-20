"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionDetails = void 0;
const BaseDetails_1 = __importDefault(require("../../helpers/BaseDetails"));
const collections_1 = require("../../queries/collections");
class CollectionDetails extends BaseDetails_1.default {
    constructor() {
        super(...arguments);
        this.mapQueryData = data => data.collection || undefined;
        this.query = (variables) => this.client.query({
            query: collections_1.collectionDetails,
            variables,
        });
    }
}
exports.CollectionDetails = CollectionDetails;
//# sourceMappingURL=CollectionDetails.js.map