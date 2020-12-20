"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("../../consts");
const NamedObservable_1 = require("../NamedObservable");
const types_1 = require("./types");
/**
 * Sets or removes data from local storage in one of the specified data format.
 * If data is set to null, then it is removed from local storage.
 * If needed, it stringify data for persistance in local storage or parse such data to be retrieved in desired format.
 */
class LocalStorageHandlerProxy extends NamedObservable_1.NamedObservable {
    /**
     * Save string item to local storage.
     * @param name Unique key by which item is identified.
     * @param item String to be saved. If null, then item is completely removed from local storage.
     */
    saveItem(name, item) {
        if (!consts_1.LOCAL_STORAGE_EXISTS) {
            return;
        }
        if (item) {
            window.localStorage.setItem(name, item);
        }
        else {
            window.localStorage.removeItem(name);
        }
        this.notifyChange(name, item);
    }
    /**
     * Retrieve string item from local storage.
     * @param name Unique key by which item is identified.
     */
    static retrieveItem(name) {
        if (!consts_1.LOCAL_STORAGE_EXISTS) {
            return null;
        }
        return window.localStorage.getItem(name);
    }
    /**
     * Stringify object and saves it to local storage.
     * @param name Unique key by which object is identified.
     * @param item Object to be saved. If null, then object is completely removed from local storage.
     */
    saveObject(name, object) {
        if (!consts_1.LOCAL_STORAGE_EXISTS) {
            return;
        }
        if (object) {
            window.localStorage.setItem(name, JSON.stringify(object));
        }
        else {
            window.localStorage.removeItem(name);
        }
        this.notifyChange(name, object);
    }
    /**
     * Retrieve item from local storage and parse it as object.
     * @param name Unique key by which object is identified.
     */
    static retrieveObject(name) {
        if (!consts_1.LOCAL_STORAGE_EXISTS) {
            return null;
        }
        const item = window.localStorage.getItem(name);
        if (item) {
            return JSON.parse(item);
        }
        return null;
    }
    clearStorage() {
        if (!consts_1.LOCAL_STORAGE_EXISTS) {
            return;
        }
        window.localStorage.clear();
        this.notifyChange(types_1.LocalStorageEvents.CLEAR, undefined);
    }
}
exports.default = LocalStorageHandlerProxy;
//# sourceMappingURL=Proxy.js.map