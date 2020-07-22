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

  ngOnInit(): void {
    this._mainInteractionService.toggleAdmin$.subscribe((adminState) => {
      this.toggleAdmin = adminState;
    });
  }
  onAdminClick = () => {
    this.toggleAdmin = this.toggleAdmin ? false : true;
    this._mainInteractionService.toggleAdmin(this.toggleAdmin);
  };
}
