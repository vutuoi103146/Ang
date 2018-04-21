import {Component, OnInit} from '@angular/core'
import { EmailValidator } from '@angular/forms';
import { EmployeeService } from './services/employee.service';

@Component ({
    selector: 'employee-list',
    templateUrl: './employee.component.html'
})
export class EmployeeListComponent implements OnInit
{
    public employees:any[];
    constructor(private employeeService: EmployeeService)
    {

    }
    ngOnInit()
    {
       this.employees =  this.employeeService.GetList();
    }
}