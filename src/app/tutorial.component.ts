import { Component } from '@angular/core';
@Component({
    selector: 'my-tutorial',
    template:'<h4>This is Tutorial Component</h4> <h3 [class.redColor] ="applyClass">Apply Class</h3> <h3 [style.color] = "colorblue" >Style Class</h3>',
    styles:['.redColor{ color: Red;}']
})
export class TutorialComponent
{

    public applyClass = true;
    public colorblue = "blue";
}