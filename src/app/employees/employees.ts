export interface Employee {
  totalEmployees: number;
  availableEmployees: number;
  assignedEmployees: number;
}

export interface EmployeeList {
  employeeID: number;
  emplyeeName: string;
  employeeAge: string;
  employeeGender: string;
  employeeSalary: number;
  joiningDate: Date;
  insurance: boolean;
  employeeAddress: string;
}
