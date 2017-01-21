import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { <%= featureName %> } from './<%= featureName %>'

@Injectable()
export class <%= featureName %>Service {
    serviceBaseUrl:string = 'http://localhost:8080/api/';

    constructor(private http:Http) { }

    getAll<%= featureName %>():Observable<<%= featureName %>[]>{
      return this.http.get(this.serviceBaseUrl)
        .map((res:Response)=>{res.json})
        .catch((error)=>{return Observable.throw(error)});
    }

    create<%= featureName %>(<%= lowerFeatureName %>:<%= featureName %>):Observable<any>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.serviceBaseUrl,<%= lowerFeatureName %>,{ headers })
        .map((res:Response)=>{res.json})
        .catch((error)=>{return Observable.throw(error)});
    }

    update<%= featureName %>(<%= lowerFeatureName %>:<%= featureName %>):Observable<any>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.serviceBaseUrl,<%= lowerFeatureName %>,{ headers })
        .map((res:Response)=>{res.json})
        .catch((error)=>{return Observable.throw(error)});
    }
    delete<%= featureName %>(<%= lowerFeatureName %>:<%= featureName %>):Observable<any>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.serviceBaseUrl,<%= lowerFeatureName %>,{ headers })
        .map((res:Response)=>{res.json})
        .catch((error)=>{return Observable.throw(error)});
    }
}
