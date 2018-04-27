import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector:'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent  {
    constructor(private router: Router, private loginService: LoginService, private http:Http)
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

    postToExpress()
    {
        const url: string ="http://localhost:3000/sign";
        const urlGet: string ="http://localhost:3000/getData";
        const headers = new Headers({'Content-Type': 'application/json'});
        const body = JSON.stringify({'name': 'Cao Thanh Hùng'});
        this.http.post(url,body,{ headers })
        .toPromise()
        .then(res => res.text())
        .then(resText => console.log(resText));

        this.http.get(urlGet)
        .toPromise()
        .then(res => res.text())
        .then(resText => console.log(resText));

        //this.http.get()

    }
}