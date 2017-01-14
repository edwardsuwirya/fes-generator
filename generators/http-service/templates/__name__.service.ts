import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http,Response } from '@angular/http';

@Injectable()
export class <%= httpServiceName %>Service {

    serviceBaseUrl:string = 'http://localhost:8080/api/';

    constructor(private http:Http) { }

    getApi():Observable<any>{
        return this.http.get(this.serviceBaseUrl).map((res:Response)=>{res.json});
    }

}
