/**
 * Created by 15050978 on 1/29/2017.
 */
export class PagingData<T> {
    data: T;
    page: number;
    rowPerPage: number;
    totalData: number;
    startRow: number;
    totalPage: number;

    constructor(data: T, page: number, rowPerPage: number, totalData: number, startRow: number, totalPage: number) {
        this.data = data;
        this.page = page;
        this.rowPerPage = rowPerPage;
        this.totalData = totalData;
        this.startRow = startRow;
        this.totalPage = totalPage;
    }
}