import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sawapping-station-details',
  templateUrl: './sawapping-station-details.component.html',
  styleUrls: ['./sawapping-station-details.component.css'],
})
export class SawappingStationDetailsComponent implements OnInit {
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
