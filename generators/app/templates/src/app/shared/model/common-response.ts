import {CommonStatus} from "./common-status";

export class CommonResponse<T> {
    commonStatus: CommonStatus;
    requestId: string;
    data: T;

    constructor(commonStatus: CommonStatus, requestId: string, data: T) {
        this.commonStatus = commonStatus;
        this.requestId = requestId;
        this.data = data;
    }
}
