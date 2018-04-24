import {CanActivate} from '@angular/router'
import {Injectable} from '@angular/core';
import { LoginService } from '../services/login.service';

@Injectable()
export class CheckloginGuard implements CanActivate
{
    constructor(private loginService: LoginService)
    {

    }
    canActivate()
    {
        let status: boolean =  this.loginService.IsLoggedIn();
        if (!status)
        {
            alert("You don't permisson access this page");
        }
        return status;
    }
}