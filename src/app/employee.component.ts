import {Component, OnInit} from '@angular/core'
import { EmailValidator } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import {Observable} from 'rxjs/Observable'
import { error } from 'protractor';

@Component ({
    selector: 'employee-list',
    templateUrl: './employee.component.html'
})
export class EmployeeListComponent implements OnInit
{
    public employees: any[];
    constructor(private employeeService: EmployeeService)
    {
       
    }
    ngOnInit()
    {
        this.employeeService.GetList().subscribe((response:any)=> {
            this.employees =  response;
        },error =>{
            console.error("System error API: " + error)
        });
    }
}