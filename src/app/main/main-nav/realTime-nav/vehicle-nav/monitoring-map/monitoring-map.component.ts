import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoring-map',
  templateUrl: './monitoring-map.component.html',
  styleUrls: ['./monitoring-map.component.css'],
})
export class MonitoringMapComponent implements OnInit {
  latitude = 17.385;
  longitude = 78.4867;
  lat = 17.3616;
  lng = 78.4747;
  lat2 = 17.3833;
  lng2 = 78.4011;
  previous;
  // icon is the custom icon that is shown when the item is rendered on the map
  icon = {
    url: '/assets/images/uton-logo.png',
    scaledSize: {
      width: 40,
      height: 60,
    },
  };
  // this code is for toggling the info window on each marker
  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }
  constructor() {}

  ngOnInit(): void {}
}
