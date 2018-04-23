import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

import {Subscription} from 'rxjs'

@Component({
    selector: 'employee-projects-component',
    templateUrl:'./employee-projects.component.html'
})
export class EmployeeProjectsComponent implements OnInit, OnDestroy{
    private employeeid: number;
    private sub: Subscription;
    constructor(private router: Router, private activatedRoute: ActivatedRoute)
    {

    }
    ngOnInit()
    {
        this.sub = this.activatedRoute.parent.params.subscribe(data =>{
            this.employeeid = data['id'];
        })
        //alert(this.employeeid);
    }
    ngOnDestroy()
    {
        this.sub.unsubscribe();
    }
}