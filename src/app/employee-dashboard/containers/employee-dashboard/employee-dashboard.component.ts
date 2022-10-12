import { Component } from '@angular/core';

import { Employee } from '../../models/employee.model';

@Component({
  selector: 'employee-dashboard',
  styleUrls: ['employee-dashboard.component.css'],
  template: `
    <div>
      <h1 class="text-3xl font-bold underline">Employee Dashboard!</h1>
      <table class="min-w-full border-collapse block md:table">
        <thead class="block md:table-header-group">
          <tr
            class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative "
          >
            <th
              class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
            >
              id
            </th>
            <th
              class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
            >
              Name
            </th>
            <th
              class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
            >
              online
            </th>
            <th
              class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
            >
              holidya
            </th>
            <th
              class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
            >
              works
            </th>
            <th
              class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
            >
              Actions
            </th>
          </tr>
        </thead>
      </table>
      <div *ngFor="let employee of employees">
        <!-- component -->
        <tbody class="block md:table-row-group">
          <tr
            class="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
          >
            <td
              class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
            >
              >1
            </td>
            <td
              class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
            >
              sandip
            </td>
            <td
              class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
            >
              true
            </td>
            <td
              class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
            >
              12 o claock
            </td>
            <td
              class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
            >
              work
            </td>
            <td
              class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
            >
              <span class="inline-block w-1/3 md:hidden font-bold"
                >Actions</span
              >
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
              >
                Edit
              </button>
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  `,
})
export class EmployeeDashboardComponent {
  employees: Employee[] = [
    {
      id: 1,
      name: 'rakesh',
      online: true,
      holidya: 1395198273,
      works: [
        { title: 'frontend', remaningTask: 5 },
        { title: 'backend', remaningTask: 2 },
      ],
    },
    {
      id: 2,
      name: 'akash',
      online: false,
      holidya: 1395122273,
      works: [
        { title: 'design', remaningTask: 2 },
        { title: 'backend', remaningTask: 3 },
      ],
    },
    {
      id: 3,
      name: 'fulaji',
      online: false,
      holidya: 1395198272,
      works: null,
    },
    {
      id: 4,
      name: 'adity',
      online: true,
      holidya: 1392198273,
      works: [{ title: 'devlopement', remaningTask: 5 }],
    },
    {
      id: 5,
      name: 'mukesh',
      online: false,
      holidya: 1395198273,
      works: [{ title: 'backend', remaningTask: 2 }],
    },
  ];
}
