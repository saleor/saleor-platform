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
exports.makeList = void 0;
const react_apollo_1 = require("react-apollo");
const react_1 = require("react");
function makeList(createList) {
    return (variables) => {
        var _a, _b;
        const client = react_apollo_1.useApolloClient();
        const [data, setData] = react_1.useState(undefined);
        const [loading, setLoading] = react_1.useState(true);
        const list = react_1.useRef();
        const willMount = react_1.useRef(true);
        function initList() {
            return __awaiter(this, void 0, void 0, function* () {
                setLoading(true);
                list.current = createList(client);
                yield list.current.init(variables);
                setData(list.current.data);
                setLoading(false);
            });
        }
        react_1.useEffect(() => {
            if (!willMount.current) {
                initList();
            }
        }, [JSON.stringify(variables)]);
        if (willMount.current) {
            initList();
            willMount.current = false;
        }
        const next = () => __awaiter(this, void 0, void 0, function* () {
            var _c;
            setLoading(true);
            const nextData = yield ((_c = list.current) === null || _c === void 0 ? void 0 : _c.next());
            setData(nextData);
            setLoading(false);
        });
        return {
            current: (_a = list.current) === null || _a === void 0 ? void 0 : _a.current,
            data,
            loading,
            next,
            pageInfo: (_b = list.current) === null || _b === void 0 ? void 0 : _b.pageInfo,
        };
    };
}
exports.makeList = makeList;
//# sourceMappingURL=makeList.js.map