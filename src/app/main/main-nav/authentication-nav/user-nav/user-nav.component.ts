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
  constructor() {}

  ngOnInit(): void {}

  onViewFeedBack = () => {
    console.log('view feedback');
  };
}
