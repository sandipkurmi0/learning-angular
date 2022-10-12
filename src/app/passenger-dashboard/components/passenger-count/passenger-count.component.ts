import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.model';

@Component({
  selector: 'passenger-count',
  styleUrls: ['passenger-count.component.css'],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <div>Total passengers: {{ items.length }}</div>
      <div>Total CheckedIn: {{ checkedInCount() }}</div>
    </div>
  `,
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[] = [];
  checkedInCount() {
    if (!this.items) {
      return;
    }
    return this.items.filter((passenger: Passenger) => passenger.checkedIn)
      .length;
  }
}
