import {Component, OnInit} from '@angular/core'
import { EmailValidator } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import {Observable} from 'rxjs/Observable'
import { error } from 'protractor';
import {Router, ActivatedRoute} from '@angular/router';

@Component ({
    selector: 'employee-list',
    templateUrl: './employee.component.html'
})
export class EmployeeListComponent implements OnInit
{
    public pages: number[];
    public employees: any[];
    private activePage : number;
    constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute:ActivatedRoute)
    {
       
    }

    AddEmployee()
    {
        this.router.navigate(['employee-add']);
    }
    ngOnInit()
    {
        this.pages = [1,2,3,4,5];
        this.activatedRoute.queryParams.subscribe(params =>{
                this.activePage = params['numberPage'] || 1;
               // alert(this.activePage);
        })
        this.employeeService.GetList().subscribe((response:any)=> {
            this.employees =  response;
        },error =>{
            console.error("System error API: " + error)
        });
        
       

    }
}