import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent 
{
    onSubmit(value:any)
    {
      console.log(value);
    }
}
