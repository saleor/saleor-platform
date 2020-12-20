"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var apollo_link_1 = require("apollo-link");
var OperationBatcher = (function () {
    function OperationBatcher(_a) {
        var batchInterval = _a.batchInterval, batchMax = _a.batchMax, batchHandler = _a.batchHandler, batchKey = _a.batchKey;
        this.queuedRequests = new Map();
        this.batchInterval = batchInterval;
        this.batchMax = batchMax || 0;
        this.batchHandler = batchHandler;
        this.batchKey = batchKey || (function () { return ''; });
    }
    OperationBatcher.prototype.enqueueRequest = function (request) {
        var _this = this;
        var requestCopy = tslib_1.__assign({}, request);
        var queued = false;
        var key = this.batchKey(request.operation);
        if (!requestCopy.observable) {
            requestCopy.observable = new apollo_link_1.Observable(function (observer) {
                if (!_this.queuedRequests.has(key)) {
                    _this.queuedRequests.set(key, []);
                }
                if (!queued) {
                    _this.queuedRequests.get(key).push(requestCopy);
                    queued = true;
                }
                requestCopy.next = requestCopy.next || [];
                if (observer.next)
                    requestCopy.next.push(observer.next.bind(observer));
                requestCopy.error = requestCopy.error || [];
                if (observer.error)
                    requestCopy.error.push(observer.error.bind(observer));
                requestCopy.complete = requestCopy.complete || [];
                if (observer.complete)
                    requestCopy.complete.push(observer.complete.bind(observer));
                if (_this.queuedRequests.get(key).length === 1) {
                    _this.scheduleQueueConsumption(key);
                }
                if (_this.queuedRequests.get(key).length === _this.batchMax) {
                    _this.consumeQueue(key);
                }
            });
        }
        return requestCopy.observable;
    };
    OperationBatcher.prototype.consumeQueue = function (key) {
        var requestKey = key || '';
        var queuedRequests = this.queuedRequests.get(requestKey);
        if (!queuedRequests) {
            return;
        }
        this.queuedRequests.delete(requestKey);
        var requests = queuedRequests.map(function (queuedRequest) { return queuedRequest.operation; });
        var forwards = queuedRequests.map(function (queuedRequest) { return queuedRequest.forward; });
        var observables = [];
        var nexts = [];
        var errors = [];
        var completes = [];
        queuedRequests.forEach(function (batchableRequest, index) {
            observables.push(batchableRequest.observable);
            nexts.push(batchableRequest.next);
            errors.push(batchableRequest.error);
            completes.push(batchableRequest.complete);
        });
        var batchedObservable = this.batchHandler(requests, forwards) || apollo_link_1.Observable.of();
        var onError = function (error) {
            errors.forEach(function (rejecters) {
                if (rejecters) {
                    rejecters.forEach(function (e) { return e(error); });
                }
            });
        };
        batchedObservable.subscribe({
            next: function (results) {
                if (!Array.isArray(results)) {
                    results = [results];
                }
                if (nexts.length !== results.length) {
                    var error = new Error("server returned results with length " + results.length + ", expected length of " + nexts.length);
                    error.result = results;
                    return onError(error);
                }
                results.forEach(function (result, index) {
                    if (nexts[index]) {
                        nexts[index].forEach(function (next) { return next(result); });
                    }
                });
            },
            error: onError,
            complete: function () {
                completes.forEach(function (complete) {
                    if (complete) {
                        complete.forEach(function (c) { return c(); });
                    }
                });
            },
        });
        return observables;
    };
    OperationBatcher.prototype.scheduleQueueConsumption = function (key) {
        var _this = this;
        var requestKey = key || '';
        setTimeout(function () {
            if (_this.queuedRequests.get(requestKey) &&
                _this.queuedRequests.get(requestKey).length) {
                _this.consumeQueue(requestKey);
            }
        }, this.batchInterval);
    };
    return OperationBatcher;
}());
exports.OperationBatcher = OperationBatcher;
//# sourceMappingURL=batching.js.map