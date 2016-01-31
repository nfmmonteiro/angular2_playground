import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
    selector: 'hello-world',
    template: `<div>Hello {{name}}!</div>`
})
class HelloWorld {
    private name:string;

    constructor() {
        this.name = 'Nuno Monteiro';
    }
}

bootstrap(HelloWorld);
