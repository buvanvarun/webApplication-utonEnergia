import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css'],
})
export class AdminNavComponent implements OnInit {
  options = [
    'Real-time Monitoring',
    'Authentication',
    'Fleet Job Allocation',
    'Swapping Stations',
    'Parking',
    'Diagnosis',
    'Rebalancing',
    'Vehicle Status',
  ];
  option;
  choosenOption = [0, 0, 0, 0, 0, 0, 0, 0];
  admins = ['Buvan', 'Varun', 'Harsha', 'Seenu', 'five'];

  constructor() {}

  ngOnInit(): void {}

  onToggleBtn = (event: Event) => {
    this.option = document.querySelectorAll('.admin-nav-toggle-btn');

    this.option.forEach((op, i) => {
      if (op.id === (<HTMLButtonElement>event.currentTarget).id) {
        document.getElementById(op.id).classList.toggle('active');
        this.choosenOption[i] = this.choosenOption[i] === 1 ? 0 : 1;
      }
    });
  };
}
