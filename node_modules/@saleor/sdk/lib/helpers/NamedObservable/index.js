"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedObservable = void 0;
class NamedObservable {
    constructor() {
        this.subscribeToChange = (name, func) => {
            this.observers.push({
                func,
                name,
            });
        };
        this.unsubscribeToChange = (name, func) => {
            this.observers = this.observers.filter(observer => name !== observer.name && func !== observer.func);
        };
        this.subscribeToNotifiedChanges = (func) => {
            this.notifiedObservers.push(func);
        };
        this.unsubscribeToNotifiedChanges = (func) => {
            this.notifiedObservers = this.notifiedObservers.filter(notifiedObserverFunc => func !== notifiedObserverFunc);
        };
        this.notifyChange = (name, data) => {
            this.observers.forEach(observer => {
                if (name === observer.name) {
                    observer.func(data);
                }
            });
            this.notifiedObservers.forEach(notifiedObserverFunc => {
                notifiedObserverFunc(data);
            });
        };
        this.observers = [];
        this.notifiedObservers = [];
    }
}
exports.NamedObservable = NamedObservable;
//# sourceMappingURL=index.js.map