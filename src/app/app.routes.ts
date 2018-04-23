import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {EmployeeListComponent} from './employee.component'
import { NotFoundComponent } from './notFound.component';
import { EmployeeDetailComponent } from './employee-detail.component';

const routing: Routes =[
    {path: '', component: HomeComponent },
   // {path: '',redirectTo: 'employees', pathMatch:'full'}, //Chuyển trang khi vào Home
    {path: 'employees', component: EmployeeListComponent },
    {path: 'employee-detail/:id', component: EmployeeDetailComponent },
    {path: '**', component: NotFoundComponent}
]

export const appRoutes = RouterModule.forRoot(routing);