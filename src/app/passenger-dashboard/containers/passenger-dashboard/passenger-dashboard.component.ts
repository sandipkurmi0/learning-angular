import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.model';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.css'],
  template: `
    <div>
      <!-- <mat-icon
        aria-hidden="false"
        aria-label="Example home icon"
        fontIcon="home"
      ></mat-icon> -->
      <!-- <mat-icon class="mat-icon-rtl-mirror" svgIcon="thumb-up"></mat-icon> -->

      <passenger-count [items]="passengers"> </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      >
      </passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];
  constructor() {}
  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullname: 'Sandip',
        checkedIn: true,
        checkInData: 1395198273,
        children: null,
      },
      {
        id: 2,
        fullname: 'Akash',
        checkedIn: false,
        checkInData: null,
        children: [
          { name: 'Ted', age: 12 },
          { name: 'Chloe', age: 7 },
        ],
      },
      {
        id: 3,
        fullname: 'fulaji',
        checkedIn: true,
        checkInData: 1328860462,
        children: null,
      },
      {
        id: 4,
        fullname: 'grohit',
        checkedIn: false,
        checkInData: null,
        children: [{ name: 'Jessica', age: 12 }],
      },
      {
        id: 5,
        fullname: 'Chintan',
        checkedIn: true,
        checkInData: 1693875434,
        children: null,
      },
      {
        id: 6,
        fullname: 'vikash',
        checkedIn: false,
        checkInData: null,
        children: [{ name: 'Mayank', age: 26 }],
      },
      {
        id: 7,
        fullname: 'ramesh',
        checkedIn: true,
        checkInData: 1463558535,
        children: null,
      },
    ];
  }
  handleEdit(event: any) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
  handleRemove(event: any) {
    // console.log(event);
    this.passengers = this.passengers.filter(
      (passenger: Passenger) => passenger.id !== event.id
    );
  }
}
