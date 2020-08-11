import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  stats = [
    {
      ride: 'parking',
      metric: 133,
      time: '2hrs',
      penalty: '80',
      pricing: 'Rs.1400',
      rating: 4.5,
    },
    {
      ride: 'docking',
      metric: 113,
      time: '1hr',
      penalty: '60',
      pricing: 'Rs.1200',
      rating: 3.6,
    },
    {
      ride: 'maintain',
      metric: 153,
      time: '3hrs',
      penalty: '84',
      pricing: 'Rs.1600',
      rating: 5.0,
    },
  ];
  user: Observable<any>;
  userUID = '';
  userIdentity = [];
  userLicense = [];
  userVerificationStatus = 'unverified';

  constructor(
    public firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private fns: AngularFireFunctions,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var uid = (params as any).params.id;
      this.userUID = uid;
      this.user = this.firestore.collection('users').doc(uid).valueChanges();
      this.updateUserStatus();
      this.storage.ref('license/'+uid).listAll().toPromise().then(listResult => {
        listResult.items.forEach(item => {
          item.getDownloadURL().then(url => {
            this.userLicense.push(url);
          });
        });
      });
      this.storage.ref('identity/'+uid).listAll().toPromise().then(listResult => {
        listResult.items.forEach(item => {
          item.getDownloadURL().then(url => {
            this.userIdentity.push(url);
          });
        });
      });
    });
  }

  updateUserStatus() {
    const statusCallable = this.fns.httpsCallable('getUserStatus');
    statusCallable({uid: this.userUID}).toPromise().then(resStatus => {
      this.userVerificationStatus = resStatus.verifiedID;
    });
  }

  onVerifyUser(toVerify: boolean) {
    if(toVerify) {
      const verifyCallable = this.fns.httpsCallable('setUserVerified');
      verifyCallable({uid: this.userUID}).toPromise().then(verifyRes => {
        console.log(verifyRes);
        this.updateUserStatus();
      });
    }
    else {
      const unverifyCallable = this.fns.httpsCallable('setUserUnverified');
      unverifyCallable({uid: this.userUID}).toPromise().then(verifyRes => {
        console.log(verifyRes);
        this.updateUserStatus();
      });
    }
  }

  onViewFeedBack = () => {
    console.log('view feedback');
  };

  onCoupon = () => {
    console.log('send coupon');
  };
}
