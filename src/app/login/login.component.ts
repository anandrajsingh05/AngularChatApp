import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  login() {
    this.userService.login(this.username, this.password).subscribe(
      response => {
        localStorage.setItem('user', JSON.stringify(response));
      },
      error => console.error('Login error:', error)
    );
  }
}
