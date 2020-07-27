import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swapping-station-nav',
  templateUrl: './swapping-station-nav.component.html',
  styleUrls: ['./swapping-station-nav.component.css'],
})
export class SwappingStationNavComponent implements OnInit {
  swaps = [
    'swap1',
    'swap2',
    'swap3',
    'swap4',
    'swap5',
    'swap6',
    'swap7',
    'swap8',
    'swap9',
  ];

  stats = [
    {
      battery: 'parking',
      metric: 133,
      time: '2hrs',
      penalty: '80',
      pricing: 'Rs.1400',
    },
    {
      battery: 'docking',
      metric: 113,
      time: '1hr',
      penalty: '60',
      pricing: 'Rs.1200',
    },
    {
      battery: 'maintain',
      metric: 153,
      time: '3hrs',
      penalty: '84',
      pricing: 'Rs.1600',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
