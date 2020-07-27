import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainInteractionService {
  private _toggleAuthenticationSource = new Subject<boolean>();
  private _toggleAdminSource = new Subject<boolean>();
  private _toggleUserSource = new Subject<boolean>();
  private _toggleSwapSource = new Subject<boolean>();
  private _toggleFleetSource = new Subject<boolean>();

  private _toggleRealTimeSource = new Subject<boolean>();

  toggleAuthentication$ = this._toggleAuthenticationSource.asObservable();
  toggleAdmin$ = this._toggleAdminSource.asObservable();
  toggleUser$ = this._toggleUserSource.asObservable();
  toggleSwap$ = this._toggleSwapSource.asObservable();
  toggleFleet$ = this._toggleFleetSource.asObservable();

  toggleRealTime$ = this._toggleRealTimeSource.asObservable();

  toggleAuthentication(toggle: boolean) {
    this._toggleAuthenticationSource.next(toggle);
  }
  toggleAdmin(toggle: boolean) {
    this._toggleAdminSource.next(toggle);
  }
  toggleUser(toggle: boolean) {
    this._toggleUserSource.next(toggle);
  }
  toggleSwap(toggle: boolean) {
    this._toggleSwapSource.next(toggle);
  }
  toggleFleet(toggle: boolean) {
    this._toggleFleetSource.next(toggle);
  }

  toggleRealTime(toggle: boolean) {
    this._toggleRealTimeSource.next(toggle);
  }

  constructor() {}
}
