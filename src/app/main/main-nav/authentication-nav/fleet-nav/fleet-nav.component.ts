import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleet-nav',
  templateUrl: './fleet-nav.component.html',
  styleUrls: ['./fleet-nav.component.css'],
})
export class FleetNavComponent implements OnInit {
  fleets = [
    'flee1',
    'fleet2',
    'fleet3',
    'fleet4',
    'fleet5',
    'fleet6',
    'fleet7',
    'fleet8',
    'fleet9',
  ];

  constructor() {}

  ngOnInit(): void {}
}
