import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
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
  disableSubmit = false;
  constructor() {}

  ngOnInit(): void {
    document.getElementById('main-section').classList.add('hide');
  }

  onToggle = (event: Event) => {
    this.option = document.querySelectorAll('.toggle-btn');
    this.option.forEach((op, i) => {
      if (op.id === (<HTMLButtonElement>event.currentTarget).id) {
        document.getElementById(op.id).classList.toggle('active');
        this.choosenOption[i] = this.choosenOption[i] === 1 ? 0 : 1;
        this.chosen();
      }
    });
  };

  chosen = () => {
    this.choosenOption.includes(1)
      ? (this.disableSubmit = true)
      : (this.disableSubmit = false);
  };

  onSubmit = () => {
    document.getElementById('options-section').classList.add('hide');
    document.getElementById('main-section').classList.remove('hide');
  };
}
