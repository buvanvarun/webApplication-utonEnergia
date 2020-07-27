import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleet-nav',
  templateUrl: './fleet-nav.component.html',
  styleUrls: ['./fleet-nav.component.css'],
})
export class FleetNavComponent implements OnInit {
  fleets = [
    'flee1',
    'fleet2',
    'fleet3',
    'fleet4',
    'fleet5',
    'fleet6',
    'fleet7',
    'fleet8',
    'fleet9',
  ];

  block: boolean = false;

  stats = [
    {
      tasks: 'parking',
      allotted: 133,
      time: '2hrs',
      penalty: '80',
      pricing: 'Rs.1400',
    },
    {
      tasks: 'docking',
      allotted: 113,
      time: '1hr',
      penalty: '60',
      pricing: 'Rs.1200',
    },
    {
      tasks: 'maintain',
      allotted: 153,
      time: '3hrs',
      penalty: '84',
      pricing: 'Rs.1600',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClose = () => {
    document
      .querySelector('.fleet-nav-block-modal-bg')
      .classList.remove('bg-active');
  };

  onBlockChange = () => {
    let el: HTMLElement = document.querySelector(
      '.fleet-nav-profile-block-btn'
    );
    if (this.block) {
      el.style.backgroundColor = '#ee0000';
    } else {
      el.style.backgroundColor = '#000000';
    }
  };

  onYes = () => {
    if (this.block) {
      this.block = false;
    } else {
      this.block = true;
    }
    this.onBlockChange();
    this.onClose();
  };

  onNo = () => {
    this.onClose();
  };

  onBlock = () => {
    document
      .querySelector('.fleet-nav-block-modal-bg')
      .classList.add('bg-active');
  };
}
