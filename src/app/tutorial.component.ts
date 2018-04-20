import { Component, Input,Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'my-tutorial',
    template:`<hr>
            <h4>Hello {{persion}}</h4>
            <p>Component Tutotial: {{name}}</p>
            <button [disabled] = "voted" (click) = "vote(true)"> Agree </button>
            <button [disabled] = "voted" (click) = "vote(false)"> Disagree </button>
    `
})
export class TutorialComponent
{
    public persion = "Mr Anh Vũ";
    @Input() name:string ="";
    @Output() onVote = new EventEmitter<boolean>() ; 
    public voted:boolean = false; 
    public vote(agree:boolean)
    {
        this.voted = true;
        this.onVote.emit(agree);
    }
    public setName(name:string)
    {
        this.name = name;
    }
}