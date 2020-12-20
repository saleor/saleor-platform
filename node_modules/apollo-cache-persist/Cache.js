var Cache = (function () {
    function Cache(options) {
        var cache = options.cache, _a = options.serialize, serialize = _a === void 0 ? true : _a;
        this.cache = cache;
        this.serialize = serialize;
    }
    Cache.prototype.extract = function () {
        var data = this.cache.extract();
        if (this.serialize) {
            data = JSON.stringify(data);
        }
        return data;
    };
    Cache.prototype.restore = function (data) {
        if (this.serialize && typeof data === 'string') {
            data = JSON.parse(data);
        }
        if (data != null) {
            this.cache.restore(data);
        }
    };
    return Cache;
}());
export default Cache;
//# sourceMappingURL=Cache.js.map