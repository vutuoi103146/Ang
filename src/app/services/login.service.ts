import {Injectable} from '@angular/core';

@Injectable()
export class LoginService
{
    private _isLoggedIn:boolean = false;
    public IsLoggedIn(): boolean
    {
        return this._isLoggedIn;
    }public setLogin(value: boolean)
    {
        this._isLoggedIn = value;
    }
}