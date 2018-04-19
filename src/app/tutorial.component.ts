import { Component } from '@angular/core';
@Component({
    selector: 'my-tutorial',
    template:   `
                <h3 *ngIf="showLineIf"> This is Lesson 11</h3> 
                <div [ngSwitch] ="color">
                    <p *ngSwitchCase ="'red'">This is color red</p>
                    <p *ngSwitchCase ="'blue'">This is color blue</p>
                    <p *ngSwitchCase ="'yellow'">This is color yellow</p>
                    <p *ngSwitchDefault>This is color yellow</p>
                </div>
                <ul>
                    <li *ngFor = "let color of colors">{{color}}</li>
                </ul>
                `

})

export class TutorialComponent
{
    public showLineIf = false;
    public color ="yellow";
    public colors: string[] = ["red","blue","yellow"];
}