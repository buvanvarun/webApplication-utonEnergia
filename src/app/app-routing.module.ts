import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { AuthenticationMainComponent } from './authentication/authentication-main/authentication-main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationMainAdminComponent } from './main/main-nav/authentication-nav/authentication-main-admin/authentication-main-admin.component';
import { MainComponent } from './main/main.component';
import { AdminNavComponent } from './main/main-nav/authentication-nav/admin-nav/admin-nav.component';
import { AdminNavDetailsComponent } from './main/main-nav/authentication-nav/admin-nav/admin-nav-details/admin-nav-details.component';
import { UserNavComponent } from './main/main-nav/authentication-nav/user-nav/user-nav.component';
import { UserDetailsComponent } from './main/main-nav/authentication-nav/user-nav/user-details/user-details.component';
import { FleetNavComponent } from './main/main-nav/authentication-nav/fleet-nav/fleet-nav.component';
import { FleetDetailsComponent } from './main/main-nav/authentication-nav/fleet-nav/fleet-details/fleet-details.component';
import { SwappingStationNavComponent } from './main/main-nav/authentication-nav/swapping-station-nav/swapping-station-nav.component';
import { SawappingStationDetailsComponent } from './main/main-nav/authentication-nav/swapping-station-nav/sawapping-station-details/sawapping-station-details.component';
import { RealTimeMainComponent } from './main/main-nav/realTime-nav/real-time-main/real-time-main.component';
import { VehicleNavComponent } from './main/main-nav/realTime-nav/vehicle-nav/vehicle-nav.component';
import { ParkingMapComponent } from './main/main-nav/realTime-nav/vehicle-nav/parking-map/parking-map.component';
import { MonitoringMapComponent } from './main/main-nav/realTime-nav/vehicle-nav/monitoring-map/monitoring-map.component';

import { AngularFireAuthGuard, canActivate, customClaims, AuthPipe, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

const hasRole: (claim: string) => AuthPipe =
  (claim) => pipe(customClaims, map(claims =>  claims.role == claim));

const adminOnly = () => hasRole('admin');
const redirectLoggedInToMain = () => redirectLoggedInTo(['main']);

const routes: Routes = [
  { path: '', component: AuthenticationMainComponent, ...canActivate(redirectLoggedInToMain) },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'main', component: MainComponent, ...canActivate(adminOnly) },
  { path: 'main/authentication', component: AuthenticationMainAdminComponent, ...canActivate(adminOnly) },
  { path: 'main/authentication/admin', component: AdminNavComponent, ...canActivate(adminOnly) },
  {
    path: 'main/authentication/admin/:id',
    component: AdminNavDetailsComponent, ...canActivate(adminOnly)
  },
  { path: 'main/authentication/user', component: UserNavComponent, ...canActivate(adminOnly) },
  { path: 'main/authentication/user/:id', component: UserDetailsComponent, ...canActivate(adminOnly) },
  { path: 'main/authentication/fleet', component: FleetNavComponent, ...canActivate(adminOnly) },
  { path: 'main/authentication/fleet/:id', component: FleetDetailsComponent, ...canActivate(adminOnly) },
  {
    path: 'main/authentication/swappingstation',
    component: SwappingStationNavComponent, ...canActivate(adminOnly)
  },
  {
    path: 'main/authentication/swappingstation/:id',
    component: SawappingStationDetailsComponent, ...canActivate(adminOnly)
  },
  { path: 'main/realtime', component: RealTimeMainComponent, ...canActivate(adminOnly) },
  { path: 'main/realtime/vehicle', component: VehicleNavComponent, ...canActivate(adminOnly) },
  { path: 'main/realtime/vehicle/parking', component: ParkingMapComponent, ...canActivate(adminOnly) },
  {
    path: 'main/realtime/vehicle/monitoring',
    component: MonitoringMapComponent, ...canActivate(adminOnly)
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  SignupComponent,
  SigninComponent,
  AuthenticationMainComponent,
  PageNotFoundComponent,
  MainComponent,
];
