import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  submitLogin() {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(["admin"]),
      error: (err) => alert(err.message)
    })
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('admin@gmail.com', [Validators.required, Validators.email]),
      'password': new FormControl('admin123', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    })

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin'])
    }
  }
}
