import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  visible = false;
  event: HTMLInputElement;
  name: string = '';
  email: string = '';
  password: string = '';
  visibleBtn = false;
  showName: boolean = true;
  showEmail: boolean = false;
  showPassword: boolean = false;
  el: string;
  constructor() {}

  ngOnInit(): void {}

  // for toggling the visibility of password button
  onVisible = () => {
    this.visible = this.visible === true ? false : true;
    this.visibleBtn = this.visibleBtn === true ? false : true;
  };

  keyDown = (event: Event) => {
    this.el = (<HTMLInputElement>event.target).name;
    if (this.el === 'name') {
      this.showName = false;
      this.showEmail = true;
    } else if (this.el === 'email') {
      this.showEmail = false;
      this.showPassword = true;
    } else if (this.el === 'password') {
      this.onSignUp();
    } else {
      return;
    }
  };
  onSignUp = () => {
    // backend part of signup can go here
    console.log(this.email, this.name, this.password);
  };
}
