import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '  <h4>This is {{title}} </h4> <input type ="text" [value] ="image" /> <my-tutorial></my-tutorial> <button (click) = "OnClick(name.value)">OK</button>'
})
export class AppComponent {
  public title ="App Component"
  public image ="Input text to seach"
  public OnClick()
  {
    this.image ="Running Click";
    this.title ="Click Me"
  }
}
