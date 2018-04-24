import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
    selector:'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent  {
    constructor(private router: Router, private loginService: LoginService)
    {

    }
    public checkLogin(value: any)
    {
        if (value.txtUserName =="admin" && value.txtPassword =="admin") 
        {
            this.loginService.setLogin(true);
        //console.log(value);
         this.router.navigate(['/']);
        }
    }
}