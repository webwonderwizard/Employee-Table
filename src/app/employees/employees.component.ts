import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeList } from '../employees/employees';

@Component({
  selector: 'emp-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  companyName = 'ABC Company';
  constructor() {}
  employeeList: EmployeeList[] = [];
  employees: Employee = {
    totalEmployees: 500,
    availableEmployees: 30,
    assignedEmployees: 470,
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.employeeList = [
      {
        employeeID: 1,
        emplyeeName: 'John',
        employeeAge: '25',
        employeeGender: 'M',
        employeeSalary: 25000,
        joiningDate: new Date('11-Nov-2021'),
        insurance: true,
        employeeAddress: 'Bangalore',
      },
      {
        employeeID: 2,
        emplyeeName: 'Mary',
        employeeAge: '26',
        employeeGender: 'F',
        employeeSalary: 26000,
        joiningDate: new Date('11-Nov-2021'),
        insurance: true,
        employeeAddress: 'Bangalore',
      },
      {
        employeeID: 3,
        emplyeeName: 'Peter',
        employeeAge: '27',
        employeeGender: 'M',
        employeeSalary: 27000,
        joiningDate: new Date('11-Nov-2021'),
        insurance: true,
        employeeAddress: 'Bangalore',
      },
      {
        employeeID: 4,
        emplyeeName: 'Tuomas',
        employeeAge: '25',
        employeeGender: 'M',
        employeeSalary: 29000,
        joiningDate: new Date('11-Nov-2021'),
        insurance: false,
        employeeAddress: 'Noida',
      },
    ];
  }
}
