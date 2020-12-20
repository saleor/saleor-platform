"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsManager = void 0;
const consts_1 = require("../consts");
const LocalStorageHandler_1 = require("../helpers/LocalStorageHandler");
const Jobs_1 = require("./Jobs");
const QueuedJobs_1 = require("./QueuedJobs");
class JobsManager {
    constructor(localStorageHandler, apolloClientManager) {
        this.onOnline = () => {
            this.queue.forEach(item => {
                const jobGroup = item.jobGroup;
                const jobName = item.jobName;
                this.runJob(jobGroup, jobName);
            });
            this.queue = [];
        };
        this.queue = new Array();
        this.localStorageHandler = localStorageHandler;
        this.jobs = new Jobs_1.Jobs(this.localStorageHandler, apolloClientManager);
        this.queuedJobs = new QueuedJobs_1.QueuedJobs(this.localStorageHandler, apolloClientManager);
        this.enqueueAllSavedInRepository();
        if (consts_1.WINDOW_EXISTS) {
            window.addEventListener("online", this.onOnline);
        }
    }
    /**
     * Executes job immediately and returns result or error.
     * @param jobGroup Job group name referencing to the class with job functions.
     * @param jobName Jobs within group/class.
     * @param params Object passed as the first argument to the job function.
     */
    run(jobGroup, jobName, params) {
        const func = this.jobs[jobGroup][jobName];
        if (typeof func === "function") {
            return func(params);
        }
        return undefined;
    }
    /**
     * Add job to the queue. If there is an internet connection available, job is executed immediatelly.
     * Otherwise job is inserted into the queue and delayed until internet connection will be restored.
     * Queue is persisted in local storage.
     * @param jobGroup Job group name referencing to the class with job functions.
     * @param jobName Jobs within group/class.
     */
    addToQueue(jobGroup, jobName) {
        if (navigator.onLine) {
            this.runJob(jobGroup, jobName);
        }
        else {
            this.enqueueJob(jobGroup, jobName);
        }
    }
    /**
     * Attach event listener to the job group.
     * @param jobGroup Job group name referencing to the class with job functions.
     * @param onEventListener Function to be called if event will occur during job execution.
     */
    attachEventListener(jobGroup, onEventListener) {
        const typedEventListener = onEventListener;
        this.jobs[jobGroup].attachEventListener(typedEventListener);
    }
    /**
     * Attach error listener to the queued job group.
     * @param jobGroup Job group name referencing to the class with job functions.
     * @param onErrorListener Function to be called if error will occur during job execution.
     */
    attachErrorListener(jobGroup, onErrorListener) {
        const typedErrorListener = onErrorListener;
        this.queuedJobs[jobGroup].attachErrorListener(typedErrorListener);
    }
    runJob(jobGroup, jobName) {
        const func = this.queuedJobs[jobGroup][jobName];
        if (typeof func === "function") {
            func();
        }
        this.dequeueJob(jobGroup, jobName);
    }
    enqueueJob(jobGroup, jobName) {
        const methodName = jobName.toString();
        const jobAlreadyQueued = this.queue.some(item => item.jobGroup === jobGroup && item.jobName === jobName);
        if (!jobAlreadyQueued) {
            this.queue.push({ jobGroup, jobName: methodName });
            this.updateJobStateInRepository(jobGroup, jobName, true);
        }
    }
    dequeueJob(jobGroup, jobName) {
        const methodName = jobName.toString();
        this.queue = this.queue.filter(item => item.jobGroup !== jobGroup || item.jobName !== methodName);
        this.updateJobStateInRepository(jobGroup, jobName, false);
    }
    updateJobStateInRepository(jobGroup, jobName, state) {
        if (!consts_1.LOCAL_STORAGE_EXISTS) {
            return;
        }
        let jobs = LocalStorageHandler_1.LocalStorageHandler.getJobs();
        if (!jobs) {
            jobs = null;
        }
        const jobGroupString = jobGroup.toString();
        const jobNameString = jobName.toString();
        const jobGroupObject = jobs ? jobs[jobGroup] : null;
        this.localStorageHandler.setJobs(Object.assign(Object.assign({}, jobs), { [jobGroupString]: Object.assign(Object.assign({}, jobGroupObject), { [jobNameString]: state }) }));
    }
    enqueueAllSavedInRepository() {
        if (!consts_1.LOCAL_STORAGE_EXISTS) {
            return;
        }
        const jobs = LocalStorageHandler_1.LocalStorageHandler.getJobs();
        if (jobs) {
            Object.keys(jobs).forEach(jobGroupString => {
                const jobGroupKey = jobGroupString;
                const jobGroup = jobs[jobGroupKey];
                if (jobGroup) {
                    Object.keys(jobGroup).forEach(jobNameString => {
                        const jobNameKey = jobNameString;
                        const jobNameState = jobGroup[jobNameKey];
                        if (jobNameState) {
                            this.addToQueue(jobGroupString, jobNameString);
                        }
                    });
                }
            });
        }
    }
}
exports.JobsManager = JobsManager;
//# sourceMappingURL=JobsManager.js.map