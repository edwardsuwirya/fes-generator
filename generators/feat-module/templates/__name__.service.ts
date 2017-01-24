import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { <%= featureName %> } from './<%= featureFileName %>';

import { TokenService } from "../shared/service/token.service";

@Injectable()
export class <%= featureName %>Service {
    serviceBaseUrl:string = 'http://localhost:8080/api/';

    constructor(private http:Http,private tokenService:TokenService) { }

    createAuthorizationHeader(headers: Headers) {
      headers.append('Authorization', 'Bearer  ' +
      this.tokenService.getToken('usertoken'));
    }

    getAll<%= featureName %>():Observable<<%= featureName %>[]>{
      let headers = new Headers();
      this.createAuthorizationHeader(headers);

      let options = new RequestOptions({ headers: headers });

      return this.http.get(this.serviceBaseUrl,options)
        .map(this.extractData)
        .catch(this.handleError);
    }

    create<%= featureName %>(<%= lowerFeatureName %>:<%= featureName %>):Observable<any>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.createAuthorizationHeader(headers);

      let options = new RequestOptions({ headers: headers });

      return this.http.post(this.serviceBaseUrl,<%= lowerFeatureName %>,options)
        .map(this.extractData)
        .catch(this.handleError);
    }

    update<%= featureName %>(<%= lowerFeatureName %>:<%= featureName %>):Observable<any>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.createAuthorizationHeader(headers);

      let options = new RequestOptions({ headers: headers });

      return this.http.post(this.serviceBaseUrl,<%= lowerFeatureName %>,options)
        .map(this.extractData)
        .catch(this.handleError);
    }
    delete<%= featureName %>(<%= lowerFeatureName %>:<%= featureName %>):Observable<any>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.createAuthorizationHeader(headers);

      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.serviceBaseUrl,<%= lowerFeatureName %>,options)
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
