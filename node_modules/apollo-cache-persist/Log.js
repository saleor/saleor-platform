var Log = (function () {
    function Log(options) {
        var _a = options.debug, debug = _a === void 0 ? false : _a;
        this.debug = debug;
        this.lines = [];
    }
    Log.prototype.emit = function (level, message) {
        if (level in console) {
            var prefix = Log.prefix;
            console[level].apply(console, [prefix].concat(message));
        }
    };
    Log.prototype.tailLogs = function () {
        var _this = this;
        this.lines.forEach(function (_a) {
            var level = _a[0], message = _a[1];
            return _this.emit(level, message);
        });
    };
    Log.prototype.getLogs = function () {
        return this.lines;
    };
    Log.prototype.write = function (level, message) {
        var buffer = Log.buffer;
        this.lines = this.lines.slice(1 - buffer).concat([[level, message]]);
        if (this.debug || level !== 'log') {
            this.emit(level, message);
        }
    };
    Log.prototype.info = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.write('log', message);
    };
    Log.prototype.warn = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.write('warn', message);
    };
    Log.prototype.error = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.write('error', message);
    };
    Log.buffer = 30;
    Log.prefix = '[apollo-cache-persist]';
    return Log;
}());
export default Log;
//# sourceMappingURL=Log.js.map