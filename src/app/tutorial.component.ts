import { Component } from '@angular/core';
@Component({
    selector: 'my-tutorial',
    template:'<button (click) = "OnClick(name.value)">OK</button> <input type="text" #name />',
    styles:['.redColor{ color: Red;}']

})
export class TutorialComponent
{
    OnClick(value)
    {
        alert(value)
    }
    public applyClass = true;
    public colorblue = "blue";
}