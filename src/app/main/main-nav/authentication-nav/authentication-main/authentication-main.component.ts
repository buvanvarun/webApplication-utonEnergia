import { Component, OnInit } from '@angular/core';
import { MainInteractionService } from '../../../main-interaction.service';
@Component({
  selector: 'app-authentication-main-nav',
  templateUrl: './authentication-main.component.html',
  styleUrls: ['./authentication-main.component.css'],
})
export class AuthenticationMainComponent implements OnInit {
  constructor(private _mainInteractionService: MainInteractionService) {}

  toggleAdmin: boolean = false;

  onAdminClick = () => {
    this.toggleAdmin = this.toggleAdmin ? false : true;
    this._mainInteractionService.toggleAdmin(this.toggleAdmin);
    // the authentication panel must disappear in the main component

    // the admincomponent and the admin details must show up
  };

  ngOnInit(): void {}
}
