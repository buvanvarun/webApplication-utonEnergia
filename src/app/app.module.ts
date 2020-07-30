import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MapComponent } from './main/map/map.component';
import { LeftNavComponent } from './main/left-nav/left-nav.component';
import { AgmCoreModule } from '@agm/core';
import { ProfileComponent } from './main/profile/profile.component';
import { AdminNavComponent } from './main/main-nav/authentication-nav/admin-nav/admin-nav.component';
import { UserNavComponent } from './main/main-nav/authentication-nav/user-nav/user-nav.component';
import { SwappingStationNavComponent } from './main/main-nav/authentication-nav/swapping-station-nav/swapping-station-nav.component';
import { FleetNavComponent } from './main/main-nav/authentication-nav/fleet-nav/fleet-nav.component';
import { RealTimeMainComponent } from './main/main-nav/realTime-nav/real-time-main/real-time-main.component';
import { BatteryNavComponent } from './main/main-nav/realTime-nav/battery-nav/battery-nav.component';
import { FleetRealtimeNavComponent } from './main/main-nav/realTime-nav/fleet-realtime-nav/fleet-realtime-nav.component';
import { DockStationNavComponent } from './main/main-nav/realTime-nav/dock-station-nav/dock-station-nav.component';
import { AuthenticationMainAdminComponent } from './main/main-nav/authentication-nav/authentication-main-admin/authentication-main-admin.component';
import { AdminNavDetailsComponent } from './main/main-nav/authentication-nav/admin-nav/admin-nav-details/admin-nav-details.component';
import { UserDetailsComponent } from './main/main-nav/authentication-nav/user-nav/user-details/user-details.component';
import { FleetDetailsComponent } from './main/main-nav/authentication-nav/fleet-nav/fleet-details/fleet-details.component';
import { SawappingStationDetailsComponent } from './main/main-nav/authentication-nav/swapping-station-nav/sawapping-station-details/sawapping-station-details.component';
import { VehicleNavComponent } from './main/main-nav/realTime-nav/vehicle-nav/vehicle-nav.component';
import { ParkingMapComponent } from './main/main-nav/realTime-nav/vehicle-nav/parking-map/parking-map.component';
import { MonitoringMapComponent } from './main/main-nav/realTime-nav/vehicle-nav/monitoring-map/monitoring-map.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MapComponent,
    LeftNavComponent,
    ProfileComponent,
    AdminNavComponent,
    UserNavComponent,
    SwappingStationNavComponent,
    FleetNavComponent,
    RealTimeMainComponent,
    BatteryNavComponent,
    FleetRealtimeNavComponent,
    DockStationNavComponent,
    AuthenticationMainAdminComponent,
    AdminNavDetailsComponent,
    UserDetailsComponent,
    FleetDetailsComponent,
    SawappingStationDetailsComponent,
    VehicleNavComponent,
    ParkingMapComponent,
    MonitoringMapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPtSxYO5kCfSYICgoA3zy-LvZW5cii5vE',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
