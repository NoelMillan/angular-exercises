import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.scss']
})
export class Ejercicio2Component implements OnInit {

  employeeOrgData: any;
  orgCount1: any;
  orgCount2: any; 
  orgCount3: any; 
  employeeLabel: any;
  employeeJIRAHoursData: any;
  
  actionOrgData: any;
  actionLabel: any;

  
  employeeOrganizationData = [
    { name: 'employee1', designation: 'manager', employer: 'Multiplataforma' },
    { name: 'employee5', designation: 'manager', employer: 'Desarrollo web' },
    { name: 'employee8', designation: 'manager', employer: 'Ciberseguridad' },
  ]

  actionOrganizationData = [
    { name: 'employee1', designation: 'manager', employer: 'Eating' },
    { name: 'employee5', designation: 'manager', employer: 'Drinking' },
    { name: 'employee8', designation: 'manager', employer: 'Sleeping' },
    { name: 'employee8', designation: 'manager', employer: 'Designing' },
    { name: 'employee8', designation: 'manager', employer: 'Coding' },
    { name: 'employee8', designation: 'manager', employer: 'Cycling' },
    { name: 'employee8', designation: 'manager', employer: 'Running' },
  ]

  dataSource: any;
  constructor() {
    this.dataSource = {
      labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"],
      datasets: [
        {
          type: 'line',
          borderColor: '#FFA500',
          borderWidth: 2,
          fill: false,
          label: "Importaciones",
          data: [30, 10, 90, 50, 56, 90, 34]
        },
        {
          label: "Exportaciones",
          backgroundColor: "#26A699",
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
  }
  ngOnInit() {

    this.orgCount1 = 300;
    this.orgCount2 = 50;
    this.orgCount3 = 100;
    
    this.employeeLabel =

      this.employeeOrganizationData.map(emp => emp.employer)
        .filter((value, index, self) => self.indexOf(value) === index);

    this.actionLabel =

      this.actionOrganizationData.map(emp => emp.employer)
        .filter((value, index, self) => self.indexOf(value) === index);
  

    this.employeeOrgData = {
      labels: this.employeeLabel,
      datasets: [
        {
          data: [this.orgCount1, this.orgCount2, this.orgCount3],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA727', '#FFC0CB', '#7f00ff ']
        }
      ]
    }

    this.actionOrgData = {
      labels: this.actionLabel,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
      }
      ]
    }

  }

}
