import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeService } from './services/employee.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,EmployeeListComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
