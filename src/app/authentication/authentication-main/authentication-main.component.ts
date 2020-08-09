import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-authentication-main',
  templateUrl: './authentication-main.component.html',
  styleUrls: ['./authentication-main.component.css'],
})
export class AuthenticationMainComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onUtonSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      hd: 'utonenergia.com'
    });
    this.auth.signInWithPopup(provider).then((result) => {
      if(result.additionalUserInfo.profile.hasOwnProperty('hd') || result.additionalUserInfo.profile['hd']=='utonenergia.com') {
        if(result.additionalUserInfo.isNewUser) {
          // Wanna do something?
        }
        result.user.getIdTokenResult().then(idTokenRes => {
          if(idTokenRes.claims['role']=='admin') {
            this.router.navigate(['/main']);
          }
          else {
            console.log('Thank you for your interest, please wait till you are given access');
          }
        });
      }
      else {
        result.user.delete().then(() => {
          // User is deleted successfully.
        }).catch(() => {
          // User deletion failure, register the error in database
        }).finally(() => {
          console.log('Invalid User');
        })
      }
    }).catch((error) => {
      console.log('Error signin');
    });
  }

}
