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

  getSwapState = () => {
    this._mainInteractionService.toggleSwap$.subscribe((swapState) => {
      this.toggleSwap = swapState;
    });
  };

  getFleetState = () => {
    this._mainInteractionService.toggleFleet$.subscribe((fleetState) => {
      this.toggleFleet = fleetState;
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

  setSwapState = () => {
    this._mainInteractionService.toggleSwap$.subscribe((swapState) => {
      if (swapState) {
        document
          .querySelector('app-swapping-station-nav')
          .classList.remove('hide');
      } else {
        document
          .querySelector('app-swapping-station-nav')
          .classList.add('hide');
      }
    });
  };

  setFleetState = () => {
    this._mainInteractionService.toggleFleet$.subscribe((fleetState) => {
      if (fleetState) {
        document.querySelector('app-fleet-nav').classList.remove('hide');
      } else {
        document.querySelector('app-fleet-nav').classList.add('hide');
      }
    });
  };

  ngOnInit(): void {
    this.getAdminState();
    this.getUserState();
    this.getSwapState();
    this.getFleetState();

    this.setAdminState();
    this.setUserState();
    this.setSwapState();
    this.setFleetState();
  }
  onAdminClick = () => {
    this.toggleAdmin = this.toggleAdmin ? false : true;
    this._mainInteractionService.toggleAdmin(this.toggleAdmin);
    this._mainInteractionService.toggleUser(false);
    this._mainInteractionService.toggleSwap(false);
    this._mainInteractionService.toggleFleet(false);
  };

  onUserClick = () => {
    this.toggleUser = this.toggleUser ? false : true;
    this._mainInteractionService.toggleUser(this.toggleUser);
    this._mainInteractionService.toggleAdmin(false);
    this._mainInteractionService.toggleSwap(false);
    this._mainInteractionService.toggleFleet(false);
  };

  onSwappingStationClick = () => {
    this.toggleSwap = this.toggleSwap ? false : true;
    this._mainInteractionService.toggleSwap(this.toggleSwap);
    this._mainInteractionService.toggleAdmin(false);
    this._mainInteractionService.toggleUser(false);
    this._mainInteractionService.toggleFleet(false);
  };

  onFleetClick = () => {
    this.toggleFleet = this.toggleFleet ? false : true;
    this._mainInteractionService.toggleFleet(this.toggleFleet);
    this._mainInteractionService.toggleAdmin(false);
    this._mainInteractionService.toggleUser(false);
    this._mainInteractionService.toggleSwap(false);
  };
}
