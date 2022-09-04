import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable, delay } from 'rxjs';

import { User } from './../user.interface';
import { AdminService } from './../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<User[]> {

  constructor(private adminService: AdminService) { }

  resolve(): Observable<User[]> {
    return this.adminService.getPersonalList().pipe(delay(2000));
  }
}
