"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueuedJobs = void 0;
const Cart_1 = require("./Cart");
class QueuedJobs {
    constructor(localStorageHandler, apolloClientManager) {
        this.cart = new Cart_1.CartQueuedJobs(localStorageHandler, apolloClientManager);
    }
}
exports.QueuedJobs = QueuedJobs;
//# sourceMappingURL=QueuedJobs.js.map