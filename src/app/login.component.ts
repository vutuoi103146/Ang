import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector:'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent  {
    loginFormGroup : FormGroup
    constructor()
    {
        this.loginFormGroup = new FormGroup({
            username: new FormControl(),
            password: new FormControl()
        });
    }
    public checkLogin()
    {
        // if (value.txtUserName =="admin" && value.txtPassword =="admin") 
        // {
        //     this.loginService.setLogin(true);
        // //console.log(value);
        //  this.router.navigate(['/']);
        // }
    }
    checkValueFormGroup()
    {
        console.log(this.loginFormGroup.get("username").value);
        // this.loginFormGroup.setValue({
        //     username:    'abc123',
        //     password: '125'
        //  });
    }
}