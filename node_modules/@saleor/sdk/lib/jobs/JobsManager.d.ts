import { ApolloClientManager } from "../data/ApolloClientManager";
import { LocalStorageHandler } from "../helpers/LocalStorageHandler";
import { IJobs } from "./Jobs";
import { IQueuedJobs } from "./QueuedJobs";
import { JobFunctionParameters, QueuedJobFunctionParameters } from "./types";
export declare class JobsManager {
    private queue;
    private jobs;
    private localStorageHandler;
    private queuedJobs;
    constructor(localStorageHandler: LocalStorageHandler, apolloClientManager: ApolloClientManager);
    /**
     * Executes job immediately and returns result or error.
     * @param jobGroup Job group name referencing to the class with job functions.
     * @param jobName Jobs within group/class.
     * @param params Object passed as the first argument to the job function.
     */
    run<G extends keyof IJobs, J extends keyof IJobs[G], P extends IJobs[G][J]>(jobGroup: G, jobName: J, params: JobFunctionParameters<G, J, P>[0]): any;
    /**
     * Add job to the queue. If there is an internet connection available, job is executed immediatelly.
     * Otherwise job is inserted into the queue and delayed until internet connection will be restored.
     * Queue is persisted in local storage.
     * @param jobGroup Job group name referencing to the class with job functions.
     * @param jobName Jobs within group/class.
     */
    addToQueue<G extends keyof IQueuedJobs, J extends keyof IQueuedJobs[G]>(jobGroup: G, jobName: J): void;
    /**
     * Attach event listener to the job group.
     * @param jobGroup Job group name referencing to the class with job functions.
     * @param onEventListener Function to be called if event will occur during job execution.
     */
    attachEventListener<G extends keyof IJobs, P extends IJobs[G]["attachEventListener"]>(jobGroup: G, onEventListener: JobFunctionParameters<G, "attachEventListener", P>[0]): void;
    /**
     * Attach error listener to the queued job group.
     * @param jobGroup Job group name referencing to the class with job functions.
     * @param onErrorListener Function to be called if error will occur during job execution.
     */
    attachErrorListener<G extends keyof IQueuedJobs, P extends IQueuedJobs[G]["attachErrorListener"]>(jobGroup: G, onErrorListener: QueuedJobFunctionParameters<G, "attachErrorListener", P>[0]): void;
    private runJob;
    private enqueueJob;
    private dequeueJob;
    private onOnline;
    private updateJobStateInRepository;
    private enqueueAllSavedInRepository;
}
