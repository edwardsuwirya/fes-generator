import {Injectable} from '@angular/core';

@Injectable()
export class TokenService {

  constructor() {
  }

  getToken(tokenKey: string) {
    return localStorage.getItem(tokenKey);
  }

  saveToken(tokenKey: string, tokenValue: string) {
    localStorage.setItem(tokenKey, tokenValue);
  }

  deleteToken(tokenKey: string) {
    localStorage.removeItem(tokenKey);
  }
}
