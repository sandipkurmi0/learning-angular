import { Component } from '@angular/core';

import { Passenger } from '../../models/passenger.model';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.css'],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <ul class="passengerList">
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"> </span>
          {{ i }} : {{ passenger.fullname }}
          <!-- <p>{{ passenger | json }}</p> -->
          <div class="data">
            Check in date :
            {{
              passenger.checkInData
                ? (passenger.checkInData | date: 'y MMMM d' | uppercase)
                : 'Not checked in'
            }}
          </div>
          <div class="childrenn">
            Children :
            {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class PassengerDashboardComponent {
  passengers: Passenger[] = [
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
