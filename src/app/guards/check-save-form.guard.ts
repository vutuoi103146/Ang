import {CanDeactivate} from '@angular/router'
import {Injectable} from '@angular/core';
import { EmployeeDetailComponent } from '../employee-detail.component';

@Injectable()
export class CheckSaveGuard implements CanDeactivate<EmployeeDetailComponent>
{

    public canDeactivate(component: EmployeeDetailComponent)
    {
        alert("You don't save data!");
        return false;
    }
}