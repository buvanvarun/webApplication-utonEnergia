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
import { AuthenticationMainComponent } from './main/main-nav/authentication-nav/authentication-main/authentication-main.component';
import { AdminNavComponent } from './main/main-nav/authentication-nav/admin-nav/admin-nav.component';
import { UserNavComponent } from './main/main-nav/authentication-nav/user-nav/user-nav.component';
import { SwappingStationNavComponent } from './main/main-nav/authentication-nav/swapping-station-nav/swapping-station-nav.component';
import { FleetNavComponent } from './main/main-nav/authentication-nav/fleet-nav/fleet-nav.component';
import { RealTimeMainComponent } from './main/main-nav/realTime-nav/real-time-main/real-time-main.component';
import { VechicleNavComponent } from './main/main-nav/realTime-nav/vechicle-nav/vechicle-nav.component';
import { BatteryNavComponent } from './main/main-nav/realTime-nav/battery-nav/battery-nav.component';
import { FleetRealtimeNavComponent } from './main/main-nav/realTime-nav/fleet-realtime-nav/fleet-realtime-nav.component';
import { DockStationNavComponent } from './main/main-nav/realTime-nav/dock-station-nav/dock-station-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MapComponent,
    LeftNavComponent,
    ProfileComponent,
    AuthenticationMainComponent,
    AdminNavComponent,
    UserNavComponent,
    SwappingStationNavComponent,
    FleetNavComponent,
    RealTimeMainComponent,
    VechicleNavComponent,
    BatteryNavComponent,
    FleetRealtimeNavComponent,
    DockStationNavComponent,
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
