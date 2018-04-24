import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent  {
    constructor(private router: Router)
    {

    }
    checkLogin(value: any)
    {
        
        this.router.navigate(['/']);
    }
}