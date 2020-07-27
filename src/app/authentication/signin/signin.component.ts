import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  visible = false;
  event: HTMLInputElement;
  email: string = '';
  password: string = '';
  visibleBtn = false;
  el: string;
  showEmail_signin: boolean = true;
  showPassword_signin: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  onVisible = () => {
    this.visible = this.visible === true ? false : true;
    this.visibleBtn = this.visibleBtn === true ? false : true;
  };

  keyDown(event: Event) {
    this.el = (<HTMLInputElement>event.target).name;

    if (this.el === 'email') {
      this.showEmail_signin = false;
      this.showPassword_signin = true;
    } else if (this.el === 'password') {
      this.onSignIn();
    } else {
      return;
    }
  }

  onSignIn = () => {
    // backend part of signin does here
    console.log(this.email, this.password);
    this.router.navigate(['/main']);
  };
}
