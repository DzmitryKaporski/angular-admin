import { Component, OnInit } from '@angular/core';
import { filter, mapTo, merge, Observable } from 'rxjs';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';

import { AuthService } from './../../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private showLoader!: Observable<boolean>
  private hideLoader!: Observable<boolean>

  isLoading!: Observable<boolean>

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), mapTo(true))
    this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false))
    this.isLoading = merge(this.showLoader, this.hideLoader)
  }

  logout() {
    this.authService.logout();
  }
}
