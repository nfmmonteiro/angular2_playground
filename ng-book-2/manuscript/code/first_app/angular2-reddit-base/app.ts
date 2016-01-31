import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
    selector: 'hello-world',
    template: `
            <h1>{{title}}</h1>
            <table>
                <thead>
                    <tr>
                       <th>Name</th>
                       <th>Index</th>
                       <th>Odd</th>
                       <th>Even</th>
                       <th>Last</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="#name of names; #index=index; #odd=odd; #even=even; #last=last" class="{{odd ? 'odd' : ''}}">
                        <td>{{name}}</td>
                        <td>{{index}}</td>
                        <td>{{odd}}</td>
                        <td>{{even}}</td>
                        <td>{{last}}</td>
                    </tr>
                </tbody>
            </table>
        `,
    styles: [`
        table { width: 100%; }
        thead { text-align: left; background: LightBlue; }
        th,td { border: 1px solid grey; padding: 5px; }
        .odd { background-color: rgba(188, 198, 204, 0.16); }
    `]
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
