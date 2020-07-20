import { Component, OnInit } from '@angular/core';
import { MainInteractionService } from '../../../main-interaction.service';
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
  admins = ['Buvan', 'Varun', 'Harsha', 'Seenu'];
  stats = [
    {
      task: 'parking',
      metric: 133,
      time: '2hrs',
      efficiency: '80%',
      pricing: 'Rs.1400',
    },
    {
      task: 'docking',
      metric: 113,
      time: '1hr',
      efficiency: '60%',
      pricing: 'Rs.1200',
    },
    {
      task: 'maintain',
      metric: 153,
      time: '3hrs',
      efficiency: '84%',
      pricing: 'Rs.1600',
    },
  ];
  constructor(private _mainInteractionService: MainInteractionService) {}

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
  onAllocateJob = () => {
    document
      .querySelector('.admin-nav-job-modal-bg')
      .classList.add('bg-active');
  };
  onClose = () => {
    document
      .querySelector('.admin-nav-job-modal-bg')
      .classList.remove('bg-active');
  };

  onJobSubmit = () => {
    document
      .querySelector('.admin-nav-job-modal-bg')
      .classList.remove('bg-active');
  };
}
