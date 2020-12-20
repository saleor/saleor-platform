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
exports.makeDetails = void 0;
const react_apollo_1 = require("react-apollo");
const react_1 = require("react");
function makeDetails(createDetails) {
    return (variables) => {
        var _a;
        const client = react_apollo_1.useApolloClient();
        const [data, setData] = react_1.useState(undefined);
        const [loading, setLoading] = react_1.useState(true);
        const details = react_1.useRef();
        const willMount = react_1.useRef(true);
        function initDetails() {
            return __awaiter(this, void 0, void 0, function* () {
                setLoading(true);
                details.current = createDetails(client);
                yield details.current.init(variables);
                setData(details.current.data);
                setLoading(false);
            });
        }
        react_1.useEffect(() => {
            if (!willMount.current) {
                initDetails();
            }
        }, [JSON.stringify(variables)]);
        if (willMount.current) {
            initDetails();
            willMount.current = false;
        }
        return {
            current: (_a = details.current) === null || _a === void 0 ? void 0 : _a.current,
            data,
            loading,
        };
    };
}
exports.makeDetails = makeDetails;
//# sourceMappingURL=makeDetails.js.map