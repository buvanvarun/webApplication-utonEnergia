import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent implements OnInit {
  users: Observable<any[]>

  constructor(
    public firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.users = this.firestore.collection('users').valueChanges({idField: 'userID'});
  }
}
