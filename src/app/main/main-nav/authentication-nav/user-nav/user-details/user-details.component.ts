import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  onViewFeedBack = () => {
    console.log('view feedback');
  };

  onCoupon = () => {
    console.log('send coupon');
  };
}
