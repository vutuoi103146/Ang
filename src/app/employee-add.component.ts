import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs'
import { EmployeeService } from './services/employee.service';

@Component({
    selector:'employee-add-component',
    templateUrl: './employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit {
    public _id: number;
    public employee: any;
    constructor(
        private router: Router, private activatedRoute: ActivatedRoute,
        public employeeService:EmployeeService
    ) {

    }
    ngOnInit() {
        this.employee = {};

    }

    public saveForm()
    {
        this.employeeService.Add(this.employee).subscribe(response =>{
            if (response)
            {
                alert("Add success!");
                this.cancelClick();
            }
        })
    }
    public cancelClick()
    {
        this.router.navigate(['employees']);
    }
}