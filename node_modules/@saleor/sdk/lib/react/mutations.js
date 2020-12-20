"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSetPassword = exports.useAccountUpdate = exports.usePasswordChange = exports.useUpdateUserAddress = exports.useCreateUserAddress = exports.useDeleteUserAddresss = exports.useDefaultUserAddress = void 0;
const useMutation_1 = require("./useMutation");
// Address mutations
exports.useDefaultUserAddress = useMutation_1.mutationFactory("setUserDefaultAddress");
exports.useDeleteUserAddresss = useMutation_1.mutationFactory("setDeleteUserAddress");
exports.useCreateUserAddress = useMutation_1.mutationFactory("setCreateUserAddress");
exports.useUpdateUserAddress = useMutation_1.mutationFactory("setUpdateuserAddress");
// User mutations
exports.usePasswordChange = useMutation_1.mutationFactory("setPasswordChange");
exports.useAccountUpdate = useMutation_1.mutationFactory("setAccountUpdate");
exports.useSetPassword = useMutation_1.mutationFactory("setPassword");
//# sourceMappingURL=mutations.js.map