/**
 * Created by 15050978 on 1/27/2017.
 */
import {CommonStatus} from "./common-status";
import {PagingData} from "./paging-data";
export class CommonResponsePaging<T> {
    commonStatus: CommonStatus;
    requestId: string;
    paging: PagingData<T>;

    constructor(commonStatus: CommonStatus, requestId: string, paging: PagingData<T>) {
        this.commonStatus = commonStatus;
        this.requestId = requestId;
        this.paging = paging;
    }
}
