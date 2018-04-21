import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent 
{
    public cities = 
    [
      {id :1, Name :"Hà Nội"},
      {id :2, Name :"HCM"}
    ]
    onSubmit(value:any)
    {
      console.log(value);
    }
}
