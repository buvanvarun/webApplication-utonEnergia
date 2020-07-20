import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainInteractionService {
  private _toggleAuthenticationSource = new Subject<boolean>();

  toggleAuthentication$ = this._toggleAuthenticationSource.asObservable();

  toggleAuthentication(toggle: boolean) {
    this._toggleAuthenticationSource.next(toggle);
  }

  constructor() {}
}
