import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css'],
})
export class AdminNavComponent implements OnInit {
  admin = ['Buvan', 'Varun', 'Harsha', 'Seenu'];
  constructor() {}

  ngOnInit(): void {}
}
