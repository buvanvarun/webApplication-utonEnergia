import { Component, OnInit } from '@angular/core';
import { MainInteractionService } from '../main-interaction.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css'],
})
export class LeftNavComponent implements OnInit {
  constructor(private _mainInteractionService: MainInteractionService) {}

  toggleAuth: boolean = false;
  ngOnInit(): void {}

  authentication = () => {
    this.toggleAuth = this.toggleAuth ? false : true;
    this._mainInteractionService.toggleAuthentication(this.toggleAuth);
  };
}
