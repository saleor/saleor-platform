"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryFactory = exports.queryWithVariablesFactory = void 0;
const apollo_utilities_1 = require("apollo-utilities");
const react_1 = __importDefault(require("react"));
const helpers_1 = require("./helpers");
const hooks_1 = require("./hooks");
const useQuery = (query, variables = {}, options = {}) => {
    const saleor = helpers_1.useSaleorClient();
    const didMountRef = react_1.default.useRef(false);
    const prevDataRef = react_1.default.useRef(null);
    const prevUnsubRef = react_1.default.useRef(null);
    const { authenticated } = hooks_1.useAuth();
    const [result, setResult] = react_1.default.useState({
        data: null,
        error: null,
        loading: true,
    });
    const setData = react_1.default.useCallback((data, loading) => {
        if (!apollo_utilities_1.isEqual(data, prevDataRef.current)) {
            prevDataRef.current = data;
            setResult({ data, error: null, loading: false });
        }
        else {
            setResult(previousResult => (Object.assign(Object.assign({}, previousResult), { loading: !!loading })));
        }
    }, []);
    const { unsubscribe, setOptions, refetch: _refetch, loadMore: _loadMore, } = react_1.default.useMemo(() => saleor.legacyAPIProxy[query](variables, Object.assign(Object.assign({}, options), { onError: (error) => setResult(previousResult => (Object.assign(Object.assign({}, previousResult), { error, loading: false }))), onUpdate: (data, loading) => {
            setData(data, loading);
        } })), [query, options.skip, authenticated]);
    const refetch = react_1.default.useCallback((refetchVariables) => {
        setResult({ data: null, error: null, loading: true });
        _refetch(refetchVariables);
    }, [query]);
    const loadMore = react_1.default.useCallback((loadMoreVariables, mergeResults = true) => {
        if (_loadMore) {
            setResult(previousResult => (Object.assign(Object.assign({}, previousResult), { error: null, loading: true })));
            _loadMore(loadMoreVariables, mergeResults);
        }
    }, [query]);
    react_1.default.useEffect(() => {
        // skip on initial mount
        if (didMountRef.current) {
            refetch(variables);
        }
        else {
            didMountRef.current = true;
        }
    }, [JSON.stringify(variables)]);
    // unsubscribe from watcher on dismount
    react_1.default.useEffect(() => {
        if (prevUnsubRef.current) {
            prevUnsubRef.current();
        }
        prevUnsubRef.current = unsubscribe;
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [options.skip, authenticated]);
    return Object.assign(Object.assign({}, result), { loadMore,
        refetch,
        setOptions });
};
exports.queryWithVariablesFactory = (query) => (variables, options) => useQuery(query, variables, options);
exports.queryFactory = (query) => (options) => useQuery(query, undefined, options);
//# sourceMappingURL=useQuery.js.map