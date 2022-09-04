import { delay } from 'rxjs';
import { Injectable } from '@angular/core';

import { User } from './../user.interface';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getPersonalList() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users?_start=0&_limit=5')
  }
}
