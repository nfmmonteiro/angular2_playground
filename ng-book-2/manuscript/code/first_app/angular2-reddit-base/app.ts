import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
    selector: 'hello-world',
    template: `
        <div>
            <h1>{{title}}</h1>
            <ul>
                <li *ngFor="#name of names">{{name}}</li>
            </ul>
        </div>`
})
class HelloWorld {
    private title:string;
    private names:Array<string>;

    constructor() {
        this.title = 'My first Angular2 Application';
        this.names = ['Nuno', 'Filipe', 'Miranda', 'Monteiro'];
    }
}

bootstrap(HelloWorld);
