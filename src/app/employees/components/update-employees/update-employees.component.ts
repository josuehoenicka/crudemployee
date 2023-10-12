import { Component, OnInit } from '@angular/core';
import { iEmployee } from '../../interfaces/employee';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent implements OnInit {

  employees: iEmployee[] = [
    {
      id: "1",
      name: 'Ángel',
      email: 'angelito@gmail.com',
      phone: '+12 345 67890',
      salary: 5000,
      department: 'Rosario, Argentina'
    },
    {
      id: "2",
      name: 'Pedro',
      email: 'pedrito@gmail.com',
      phone: '+12 345 12345',
      salary: 10000,
      department: 'CABA, Argentina'
    },
    {
      id: "3",
      name: 'Juliana',
      email: 'juli@gmail.com',
      phone: '+12 345 45678',
      salary: 20000,
      department: 'Neuquén, Argentina'
    }
  ];

  constructor(){}

  ngOnInit(): void {
    this.employees.push()
  }

}
