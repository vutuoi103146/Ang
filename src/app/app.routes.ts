import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component'
import { NotFoundComponent } from './notFound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    // {path: '',redirectTo: 'employees', pathMatch:'full'}, //Chuyển trang khi vào Home
    { path: 'employees', component: EmployeeListComponent },
    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent, children:
            [
                { path: '', redirectTo: 'overview', pathMatch: 'full' },
                { path: 'overview', component: EmployeeOverviewComponent },
                { path: 'projects', component: EmployeeProjectsComponent }
            ]
    },
    { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing);