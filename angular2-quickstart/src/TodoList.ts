import {Component, View, Input} from 'angular2/core';
import {TodoModel} from './TodoModel';

@Component({
    selector: 'todo-list'
})
@View({
    template: `
        <ul>
            <li *ngFor="#todo of todos">{{todo.description}}</li>
        </ul>
    `
})
export class TodoList {
    @Input('items')
    private todos:Array<TodoModel>;
}