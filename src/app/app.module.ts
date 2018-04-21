import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,EmployeeListComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
