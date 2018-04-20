import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <h4>This is {{title}} 
          <input type="text" #txtName (keyup)="0" />
          </h4> <my-tutorial [name] ="txtName.value"></my-tutorial>
  `  
})
export class AppComponent {
  public title ="App Component"
}
