import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component'
import { NotFoundComponent } from './notFound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects.component';
import { LoginComponent } from './login.component';
import { CheckloginGuard } from './guards/check-login.guard';
import { CheckSaveGuard } from './guards/check-save-form.guard';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeAddComponent } from './employee-add.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    // {path: '',redirectTo: 'employees', pathMatch:'full'}, //Chuyển trang khi vào Home
    { path: 'employees', component: EmployeeListComponent, canActivate: [CheckloginGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'employee-edit/:id', component: EmployeeEditComponent },
    { path: 'employee-add', component: EmployeeAddComponent },
    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent,canDeactivate: [CheckSaveGuard], children:
            [
                { path: '', redirectTo: 'overview', pathMatch: 'full' },
                { path: 'overview', component: EmployeeOverviewComponent },
                { path: 'projects', component: EmployeeProjectsComponent }
            ]
    },
    { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing);