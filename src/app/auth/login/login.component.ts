import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl ('user@example.com'),
    password: new FormControl ('123456')
  })

  constructor(
    private authService: AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    // console.log('logged in');
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password);
    this.router.navigate(['/dashboard/homeAdmin']);
    console.log('logged in52525');
  }
}
