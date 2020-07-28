import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nav-details',
  templateUrl: './admin-nav-details.component.html',
  styleUrls: ['./admin-nav-details.component.css'],
})
export class AdminNavDetailsComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
