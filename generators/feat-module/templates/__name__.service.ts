import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { <%= featureName %> } from './<%= featureFileName %>';

@Injectable()
export class <%= featureName %>Service {
    serviceBaseUrl:string = 'http://localhost:8080/api/';

    constructor(private http:Http) { }

    getAll<%= featureName %>():Observable<<%= featureName %>[]>{
      return this.http.get(this.serviceBaseUrl)
        .map(this.extractData)
        .catch(this.handleError);
    }

    create<%= featureName %>(<%= lowerFeatureName %>:<%= featureName %>):Observable<any>{
      return this.http.post(this.serviceBaseUrl,<%= lowerFeatureName %>)
        .map(this.extractData)
        .catch(this.handleError);
    }

    update<%= featureName %>(<%= lowerFeatureName %>:<%= featureName %>):Observable<any>{
      return this.http.post(this.serviceBaseUrl,<%= lowerFeatureName %>)
        .map(this.extractData)
        .catch(this.handleError);
    }
    delete<%= featureName %>(<%= lowerFeatureName %>:<%= featureName %>):Observable<any>{
      return this.http.post(this.serviceBaseUrl,<%= lowerFeatureName %>)
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(response: Response) {
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Bad response status: ' + response.status);
      }
      let body = response.json();

      return body.data || { };
    }

    private handleError (error: any) {
      let errMsg = error.message || 'Server error';
      return Observable.throw(errMsg);
    }
}
