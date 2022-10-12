import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Passenger } from '../../models/passenger.model';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.css'],
  template: `
    <div>
      <div></div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input
          type="text"
          placeholder="Small Input"
          class="w-96 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name
        />
      </div>
      <!-- <div *ngif="!editing">
        {{ detail.fullname }}
      </div> -->
      <!-- <p>{{ detail | json }}</p> -->
      {{ detail.fullname }}
      <div class="data">
        Check in date :
        {{
          detail.checkInData
            ? (detail.checkInData | date: 'y MMMM d' | uppercase)
            : 'Not checked in'
        }}
      </div>
      <div class="childrenn">
        Children :
        {{ detail.children?.length || 0 }}
      </div>
      <button
        class="text-amber-500 bg-transparent border border-solid border-amber-500 hover:bg-amber-500 hover:text-white active:bg-amber-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        (click)="toggleEdit()"
      >
        {{ editing ? 'Done' : 'Edit' }}
      </button>

      <button
        class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        (click)="onRemove()"
      >
        remove
      </button>
    </div>
  `,
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail!: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;
  constructor() {}

  ngOnChanges(changes: any): void {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
}
