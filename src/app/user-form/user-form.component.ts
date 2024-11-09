import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  nickname: string = '';
  fullname: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }


  enterChat() {
    if (this.nickname && this.fullname) {
      localStorage.setItem('nickname', this.nickname);
      localStorage.setItem('fullname', this.fullname);
      this.router.navigate(['/chat']);
    }
  }

}
