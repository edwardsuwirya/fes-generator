/**
 * Created by 15050978 on 1/27/2017.
 */
export class CommonStatus {
    responseCode: string;
    responseDescription: string;

    constructor(responseCode: string, responseDescription: string) {
        this.responseCode = responseCode;
        this.responseDescription = responseDescription;
    }
}