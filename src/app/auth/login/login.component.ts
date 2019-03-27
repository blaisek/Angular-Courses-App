import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent  {

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.isLogged = true
    this.router.navigateByUrl('/')
  }

}
