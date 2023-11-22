import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  rootURL = 'http://localhost:3080/api';
  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }
  addUser(user: any) {
    return this.http.post(this.rootURL + '/users', user);
  }
}
