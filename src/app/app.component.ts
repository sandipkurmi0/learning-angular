import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <div class="app">
      <passenger-dashboard></passenger-dashboard>
      <employee-dashboard></employee-dashboard>
      <!-- <h3>Airline Passengers</h3>
      <ul class="passengerList">
        <li *ngFor="let passenger of passengers; let i = index">
          <span
            class="status"
            [ngClass]="{
              'checked-in': passenger.checkedIn,
              'checked-out': !passenger.checkedIn
            }"
          >
          </span>
          {{ i }} : {{ passenger.fullname }}
        </li>
      </ul>
      <h3>Airline Passengers</h3>
      <ul class="passengerList">
        <li *ngFor="let passenger of passengers; let i = index">
          <span
            class="status"
            [style.backgroundColor]="
              passenger.checkedIn ? '#2ecc71' : '#c0392b'
            "
          >
          </span>
          {{ i }} : {{ passenger.fullname }}
        </li>
      </ul>
      <h3>Airline Passengers</h3>
      <ul class="passengerList">
        <li *ngFor="let passenger of passengers; let i = index">
          <span
            class="status"
            [ngStyle]="{
              backgroundColor: passenger.checkedIn ? '#2ecc71' : '#c0392b'
            }"
          >
          </span>
          {{ i }} : {{ passenger.fullname }}
        </li>
      </ul> -->

      <!-- <button (click)="handleClick()" )>Change Name</button> -->
      <!-- <button (click)="handleClick(username.value)">get value</button> -->
      <!-- <input type="text" #username />-->
      <!-- <input type="text" [value]="name" (input)="handleChange($event)" /> -->
      <!-- <div *ngIf="name.length > 2">Searching for... {{ name }}</div> -->
      <!-- {{ title }}
      {{ age }}
      <div>
        {{ personalBook + schoolBook }}
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
            <h1 [innerHtml]="title"></h1>
      <h2>{{ title }}</h2>
      <img [src]="logo" />
      </div> -->
    </div>
  `,
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  // name: string = '';
  // isHappy: boolean = true;
  // logo: string = '../assets/img/logo.svg';
  // title: string;
  // age: number;
  // personalBook: number = 20;
  // schoolBook: number = 10;
  // constructor() {
  //   this.title = 'sandip kurmi';
  //   this.age = 22;
  // }
  // handleClick() {
  //   this.name = 'sandip kurmi';
  // }
  // handleChange(event: any) {
  //   this.name = event.target.value;
  // }
  // handleClick(value: string) {
  //   console.log(value);
  //   this.name = value;
  // }
}
