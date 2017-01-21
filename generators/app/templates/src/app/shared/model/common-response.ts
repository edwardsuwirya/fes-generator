export class CommonResponse {
  responseCode: string;
  responseDescription: string;

  constructor(responseCode: string, responseDescription: string) {
    this.responseCode = responseCode;
    this.responseDescription = responseDescription;
  }
}
