"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findValueInEnum = exports.filterNotEmptyArrayItems = exports.mergeEdges = exports.getMappedData = exports.isDataEmpty = exports.getErrorsFromData = void 0;
// errors are nested in data as it currently stands in the API
// this helper extracts all errors present
exports.getErrorsFromData = (data) => {
    try {
        const error = Object.keys(data).reduce((acc, key) => {
            return Object.assign(Object.assign({}, acc), (data[key].errors &&
                !!data[key].errors.length && { userInputErrors: data[key].errors }));
        }, {});
        return Object.keys(error).length ? error : null;
    }
    catch (e) {
        return null;
    }
};
exports.isDataEmpty = (data) => Object.keys(data).reduce((_, key) => !!data[key], true);
function getMappedData(mapFn, data) {
    if (!data) {
        return null;
    }
    const mappedData = mapFn(data);
    const result = mappedData && !!Object.keys(mappedData).length ? mappedData : null;
    return result;
}
exports.getMappedData = getMappedData;
exports.mergeEdges = (prevEdges, newEdges) => [
    ...prevEdges,
    ...newEdges.filter(edge => !prevEdges.some(e => e.node.id === edge.node.id)),
];
function filterNotEmptyArrayItems(value) {
    return value !== null && value !== undefined;
}
exports.filterNotEmptyArrayItems = filterNotEmptyArrayItems;
function findValueInEnum(needle, haystack) {
    const match = Object.entries(haystack).find(([, value]) => value === needle);
    if (!match) {
        throw new Error(`Value ${needle} not found in enum`);
    }
    return needle;
}
exports.findValueInEnum = findValueInEnum;
//# sourceMappingURL=utils.js.map