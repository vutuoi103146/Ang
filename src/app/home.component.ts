import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component
    ({
        selector: 'home-component',
        template: `
    <h1>Home Component</h1>
    <button (click) ="GotoEmployee()" >Go to Employee</button>
    `
    })


export class HomeComponent {
    constructor(private router: Router) {

    }
    GotoEmployee() {
        this.router.navigate(['employees']);
    }

}