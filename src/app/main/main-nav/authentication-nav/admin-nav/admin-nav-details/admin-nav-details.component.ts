import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';

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

  admin: Observable<any>;
  adminID = '';
  adminStatus = 'new';

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
  constructor(
    public firestore: AngularFirestore,
    private fns: AngularFireFunctions,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.adminID = (params as any).params.id;
      this.admin = this.firestore.collection('admins').doc(this.adminID).valueChanges();
      this.updateAdminStatus();
    });
  }

  updateAdminStatus() {
    const roleCallable = this.fns.httpsCallable('getRoleStatus');
    roleCallable({uid: this.adminID}).toPromise().then(resStatus => {
      this.adminStatus = resStatus.role;
    });
  }

  setRole(adminID: string, role: string) {
    const setRollCallable = this.fns.httpsCallable('setRole');
    setRollCallable({uid: adminID, role: role}).toPromise().then(roleStatus => {
      this.adminStatus = roleStatus;
    });
  }

  setAdmin() {
    this.setRole(this.adminID, 'admin');
  }

}
