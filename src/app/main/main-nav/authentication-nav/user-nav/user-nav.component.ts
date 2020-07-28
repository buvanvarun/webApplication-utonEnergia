import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent implements OnInit {
  users = [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5',
    'user6',
    'user7',
    'user8',
    'user9',
    'user10',
    'user11',
    'user12',
    'user13',
    'user14',
    'user15',
    'user16',
    'user17',
    'user18',
    'user19',
    'user20',
    'user21',
  ];

  constructor() {}

  ngOnInit(): void {}
}
