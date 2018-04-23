import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeService } from './services/employee.service';
import {HttpModule} from '@angular/http';
import {appRoutes} from './app.routes'
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    AppComponent,EmployeeListComponent,HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,appRoutes
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
