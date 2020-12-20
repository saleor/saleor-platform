"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutationFactory = void 0;
const react_1 = __importDefault(require("react"));
const helpers_1 = require("./helpers");
// keep track of called mutation
const useMutationTracking = (() => {
    let mostRecentMutation = 0;
    const generateNewMutationId = () => {
        mostRecentMutation += 1;
        return mostRecentMutation;
    };
    const isMostRecentMutation = (mutationId) => {
        return mostRecentMutation === mutationId;
    };
    return () => ({
        generateNewMutationId,
        isMostRecentMutation,
    });
})();
const initialState = {
    called: false,
    data: null,
    error: null,
    loading: false,
};
const useMutation = (mutation, baseVariables = {}, baseOptions = {}) => {
    const saleor = helpers_1.useSaleorClient();
    const { generateNewMutationId, isMostRecentMutation } = useMutationTracking();
    const [result, setResult] = react_1.default.useState(initialState);
    const handleMutationStart = () => {
        if (!result.loading) {
            setResult({
                called: true,
                data: null,
                error: null,
                loading: true,
            });
        }
    };
    const handleMutationError = (error, mutationId) => {
        if (isMostRecentMutation(mutationId)) {
            setResult(prevState => (Object.assign(Object.assign({}, prevState), { error, loading: false })));
        }
    };
    const handleMutationComplete = (data, mutationId) => {
        if (isMostRecentMutation(mutationId)) {
            setResult(prevState => (Object.assign(Object.assign({}, prevState), { data, loading: false })));
        }
    };
    const runMutation = react_1.default.useCallback((variables, options) => {
        return new Promise(resolve => {
            handleMutationStart();
            const mutationId = generateNewMutationId();
            const apolloVariables = Object.assign(Object.assign({}, baseVariables), variables);
            const apolloOptions = Object.assign(Object.assign({}, baseOptions), options);
            saleor.legacyAPIProxy[mutation](apolloVariables, apolloOptions)
                .then(data => {
                handleMutationComplete(data.data, mutationId);
                resolve(data);
            })
                .catch(err => {
                handleMutationError(err, mutationId);
                resolve(null);
            });
        });
    }, [mutation, baseOptions]);
    return [runMutation, result];
};
exports.mutationFactory = (mutation) => (variables, options) => useMutation(mutation, variables, options);
//# sourceMappingURL=useMutation.js.map