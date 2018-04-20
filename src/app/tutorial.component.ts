import { Component, Input } from '@angular/core';
@Component({
    selector: 'my-tutorial',
    template:`<hr>
            <h4>Hello {{persion}}</h4>
            <p>Component Tutotial: {{name}}</p>
    `
})
export class TutorialComponent
{
    public persion = "Mr Anh Vũ";
    @Input() name:string ="";
}