import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  latitude = 17.385;
  longitude = 78.4867;
  constructor() {}

  ngOnInit(): void {}
}
