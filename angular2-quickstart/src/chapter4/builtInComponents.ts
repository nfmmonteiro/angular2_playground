import { Component, View } from 'angular2/core';

@Component({
    'selector': '.built-in-components' // class selector
})
@View({
    styles: ['.bordered { border: 1px solid black; }'],
    template: `
        <h1>{{title}}</h1>

        <section>
            <h2>*ngIf</h2>
            <a href="#" (click)="showNgIf = !showNgIf;" type="button">Toggle header</a>
            <div>
                <label for="objFoo">Component Value:</label>
                <input name="objFoo" [(ngModel)]="obj.foo" />
                <span>{{obj.foo}}</span>
            </div>
            <div *ngIf="displayNgIf()" class="bordered"><input [(ngModel)]="obj.foo" />Component value: {{obj.foo}}</div>
        </section>
    `
})
export class BuiltInComponents {
    private title:string = 'Built in Components';
    private obj:any = {foo: 'bar'};
    private showNgIf:boolean = true;

    constructor() {
    }

    displayNgIf() {
        return this.showNgIf;
    }
}
