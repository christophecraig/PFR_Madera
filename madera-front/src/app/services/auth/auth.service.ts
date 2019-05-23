import { Injectable } from '@angular/core';
import { LocalStorage, SharedStorage } from 'ngx-store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @LocalStorage() @SharedStorage()
  isLoggedIn: boolean;

  constructor() { }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

}
