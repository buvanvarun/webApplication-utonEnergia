import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-map',
  templateUrl: './parking-map.component.html',
  styleUrls: ['./parking-map.component.css'],
})
export class ParkingMapComponent implements OnInit {
  latitude = 17.385;
  longitude = 78.4867;
  constructor() {}

  ngOnInit(): void {}
}
