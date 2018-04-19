import { Component } from '@angular/core';
@Component({
    selector: 'my-tutorial',
    template:'<input type="text" [(ngModel)] ="fname" /> <input type="text" [(ngModel)] ="lname" /> <br> Full name: {{fname}} {{lname}} <br>'

})
export class TutorialComponent
{
}