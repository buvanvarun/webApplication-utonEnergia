import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { AuthenticationMainComponent } from './authentication/authentication-main/authentication-main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationMainAdminComponent } from './main/main-nav/authentication-nav/authentication-main-admin/authentication-main-admin.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', component: AuthenticationMainComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'main', component: MainComponent },
  { path: 'main/authentication', component: AuthenticationMainAdminComponent },
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
