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
exports.SaleorProvider = void 0;
const react_1 = __importStar(require("react"));
const react_apollo_1 = require("react-apollo");
const __1 = require("../../..");
const context_1 = require("../../context");
const SaleorProvider = ({ apolloConfig, config, children, }) => {
    const [context, setContext] = react_1.useState(null);
    const [client, setClient] = react_1.useState(null);
    const getSaleorApiAndClient = (manager) => __awaiter(void 0, void 0, void 0, function* () {
        const { api, apolloClient } = yield manager.connect(saleorAPI => {
            if (saleorAPI) {
                setContext(Object.assign({}, saleorAPI));
            }
        });
        setContext(Object.assign({}, api));
        setClient(apolloClient);
    });
    react_1.useEffect(() => {
        const manager = new __1.SaleorManager(config, apolloConfig);
        getSaleorApiAndClient(manager);
    }, []);
    if (client && context) {
        return (react_1.default.createElement(context_1.SaleorContext.Provider, { value: context },
            react_1.default.createElement(react_apollo_1.ApolloProvider, { client: client }, children)));
    }
    return null;
};
exports.SaleorProvider = SaleorProvider;
SaleorProvider.displayName = "SaleorProvider";
//# sourceMappingURL=SaleorProvider.js.map