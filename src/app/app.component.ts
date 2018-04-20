import { Component, ViewChild } from '@angular/core';
import {TutorialComponent} from './tutorial.component'
@Component({
  selector: 'app-root',
  template: `
          <h4>This is {{title}} 
          <input type="text" #txtName (keyup)="0" />
          <button (click) ="ChangeName()">Change Name</button>
          <p>Agree number: {{agree}} Disagree: {{disgree}} </p>
          </h4> <my-tutorial *ngFor ="let persion of Names" [name] ="persion" (onVote) ="parentvoted($event)"></my-tutorial>
  `  
})
export class AppComponent {
  public title ="App Component"
  public agree:number =0;
  public  disgree: number =0;
  public Names =['Vũ','Sơn','Tuyết','Tươi']
  parentvoted(agree:boolean)
  {
    if (agree)
    {
      this.agree++;
    }
    else
    {
      this.disgree++;
    }
  }
  @ViewChild(TutorialComponent)
  public tutorialComponent: TutorialComponent
  ChangeName()
  {
    this.tutorialComponent.setName("Change Name from App Component");
  }

}
