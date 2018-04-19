import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <h4>This is {{title}} </h4> <my-tutorial></my-tutorial>
  `  
})
export class AppComponent {
  public title ="App Component"
}
