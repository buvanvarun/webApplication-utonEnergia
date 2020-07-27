import { Component, OnInit } from '@angular/core';
import { MainInteractionService } from '../main-interaction.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css'],
})
export class LeftNavComponent implements OnInit {
  constructor(private _mainInteractionService: MainInteractionService) {}

  toggleAuth: boolean;
  toggleRealTime: boolean;

  getAuthentication = () => {
    this._mainInteractionService.toggleAuthentication$.subscribe(
      (authState) => {
        this.toggleAuth = authState;
      }
    );
  };

  getRealTime = () => {
    this._mainInteractionService.toggleRealTime$.subscribe((authState) => {
      this.toggleRealTime = authState;
    });
  };

  ngOnInit(): void {
    this.getAuthentication();
    this.getRealTime();
  }

  onAuthentication = () => {
    this.toggleAuth = this.toggleAuth ? false : true;
    this._mainInteractionService.toggleAuthentication(this.toggleAuth);
    this._mainInteractionService.toggleRealTime(false);
  };

  onLocation = () => {
    this.toggleRealTime = this.toggleRealTime ? false : true;
    this._mainInteractionService.toggleRealTime(this.toggleRealTime);
    this._mainInteractionService.toggleAuthentication(false);
  };
}
