import { Component, Input } from '@angular/core';
import { EmployeeList } from '../employees';

@Component({
  selector: 'emp-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent {
  @Input() employees: EmployeeList[] = [];
}
