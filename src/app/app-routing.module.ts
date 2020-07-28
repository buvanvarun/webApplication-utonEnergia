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
const routes: Routes = [
  { path: '', component: AuthenticationMainComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'main', component: MainComponent },
  { path: 'main/authentication', component: AuthenticationMainAdminComponent },
  { path: 'main/authentication/admin', component: AdminNavComponent },
  {
    path: 'main/authentication/admin/:id',
    component: AdminNavDetailsComponent,
  },
  { path: 'main/authentication/user', component: UserNavComponent },
  { path: 'main/authentication/user/:id', component: UserDetailsComponent },
  { path: 'main/authentication/fleet', component: FleetNavComponent },
  { path: 'main/authentication/fleet/:id', component: FleetDetailsComponent },
  {
    path: 'main/authentication/swappingstation',
    component: SwappingStationNavComponent,
  },
  {
    path: 'main/authentication/swappingstation/:id',
    component: SawappingStationDetailsComponent,
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
