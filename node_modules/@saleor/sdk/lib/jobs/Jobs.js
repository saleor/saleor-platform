"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jobs = void 0;
const Auth_1 = require("./Auth");
const Checkout_1 = require("./Checkout");
class Jobs {
    constructor(localStorageHandler, apolloClientManager) {
        this.auth = new Auth_1.AuthJobs(localStorageHandler, apolloClientManager);
        this.checkout = new Checkout_1.CheckoutJobs(localStorageHandler, apolloClientManager);
    }
}
exports.Jobs = Jobs;
//# sourceMappingURL=Jobs.js.map