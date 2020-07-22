import { Component, OnInit } from '@angular/core';
import { MainInteractionService } from '../../../main-interaction.service';
@Component({
  selector: 'app-authentication-main-nav',
  templateUrl: './authentication-main.component.html',
  styleUrls: ['./authentication-main.component.css'],
})
export class AuthenticationMainComponent implements OnInit {
  constructor(private _mainInteractionService: MainInteractionService) {}
  toggleAdmin: boolean;
  toggleUser: boolean;
  toggleSwap: boolean;
  toggleFleet: boolean;

  getAdminState = () => {
    this._mainInteractionService.toggleAdmin$.subscribe((adminState) => {
      this.toggleAdmin = adminState;
    });
  };

  getUserState = () => {
    this._mainInteractionService.toggleUser$.subscribe((userState) => {
      this.toggleUser = userState;
    });
  };

  setAdminState = () => {
    this._mainInteractionService.toggleAdmin$.subscribe((adminState) => {
      if (adminState) {
        document.querySelector('app-admin-nav').classList.remove('hide');
      } else {
        document.querySelector('app-admin-nav').classList.add('hide');
      }
    });
  };

  setUserState = () => {
    this._mainInteractionService.toggleUser$.subscribe((userState) => {
      if (userState) {
        document.querySelector('app-user-nav').classList.remove('hide');
      } else {
        document.querySelector('app-user-nav').classList.add('hide');
      }
    });
  };

  ngOnInit(): void {
    this.getAdminState();
    this.getUserState();

    this.setAdminState();
    this.setUserState();
  }
  onAdminClick = () => {
    this.toggleAdmin = this.toggleAdmin ? false : true;
    this._mainInteractionService.toggleAdmin(this.toggleAdmin);
    this._mainInteractionService.toggleUser(false);
  };

  onUserClick = () => {
    this.toggleUser = this.toggleUser ? false : true;
    this._mainInteractionService.toggleUser(this.toggleUser);
    this._mainInteractionService.toggleAdmin(false);
    console.log(this.toggleUser);
  };

  onSwappingStationClick = () => {};

  onFleetClick = () => {};
}
