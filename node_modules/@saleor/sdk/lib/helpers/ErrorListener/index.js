"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorListener = void 0;
class ErrorListener {
    constructor() {
        this.addOnErrorListener = (func) => {
            this.errorListeners.push(func);
        };
        this.removeOnErrorListener = (func) => {
            this.errorListeners = this.errorListeners.filter(errorListenersFunc => func !== errorListenersFunc);
        };
        this.fireError = (error, type) => {
            this.errorListeners.forEach(errorListenersFunc => {
                errorListenersFunc(error, type);
            });
        };
        this.errorListeners = [];
    }
}
exports.ErrorListener = ErrorListener;
//# sourceMappingURL=index.js.map