import {CanActivate} from '@angular/router'
import {Injectable} from '@angular/core';

@Injectable()
export class CheckloginGuard implements CanActivate
{
    canActivate()
    {
        return true;
    }
}