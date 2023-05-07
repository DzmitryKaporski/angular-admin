import { Injectable } from '@angular/core';


import { Observable, delay } from 'rxjs';

import { User } from './../user.interface';
import { AdminService } from './../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver  {

  constructor(private adminService: AdminService) { }

  resolve(): Observable<User[]> {
    return this.adminService.getPersonalList().pipe(delay(2000));
  }
}
