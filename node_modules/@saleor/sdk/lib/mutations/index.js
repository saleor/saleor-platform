"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUTATIONS = void 0;
const Address = __importStar(require("./address"));
const User = __importStar(require("./user"));
// TODO: Add ability to pass custom fragments to mutations
exports.MUTATIONS = {
    AccountUpdate: (client, options) => client.mutate(Object.assign({ mutation: User.accountUpdate }, options)),
    AddressTypeUpdate: (client, options) => client.mutate(Object.assign({ mutation: Address.setCustomerDefaultAddress }, options)),
    CreateUserAddress: (client, options) => client.mutate(Object.assign({ mutation: Address.createUserAddress }, options)),
    DeleteUserAddress: (client, options) => client.mutate(Object.assign({ mutation: Address.deleteUserAddress }, options)),
    PasswordChange: (client, options) => client.mutate(Object.assign({ mutation: User.changeUserPassword }, options)),
    SetPassword: (client, options) => client.mutate(Object.assign({ mutation: User.setPassword }, options)),
    UpdateUserAddress: (client, options) => client.mutate(Object.assign({ mutation: Address.updateUserAddress }, options)),
};
//# sourceMappingURL=index.js.map