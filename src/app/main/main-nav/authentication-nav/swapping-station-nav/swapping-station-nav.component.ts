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

  constructor() {}

  ngOnInit(): void {}
}
