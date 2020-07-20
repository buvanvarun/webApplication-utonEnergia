import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainInteractionService {
  private _toggleAuthenticationSource = new Subject<boolean>();
  private _toggleAdminSource = new Subject<boolean>();

  toggleAuthentication$ = this._toggleAuthenticationSource.asObservable();
  toggleAdmin$ = this._toggleAdminSource.asObservable();

  toggleAuthentication(toggle: boolean) {
    this._toggleAuthenticationSource.next(toggle);
  }

  toggleAdmin(toggle: boolean) {
    this._toggleAdminSource.next(toggle);
  }

  constructor() {}
}
