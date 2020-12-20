"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsHandler = void 0;
class JobsHandler {
    constructor() {
        this.eventListeners = [];
    }
    attachEventListener(eventListener) {
        this.eventListeners.push(eventListener);
    }
    notifyEvent(event, value) {
        this.eventListeners.forEach(eventListener => {
            eventListener(event, value);
        });
    }
}
exports.JobsHandler = JobsHandler;
//# sourceMappingURL=JobsHandler.js.map