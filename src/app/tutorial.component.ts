import { Component } from '@angular/core';
@Component({
    selector: 'my-tutorial',
    template:`
            <h4>Hello {{persion}}</h4>
    `
})
export class TutorialComponent
{
    public persion = "Mr Anh Vũ";
}