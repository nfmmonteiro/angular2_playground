import {Component, View, Input} from 'angular2/core';
import {TodoModel} from './TodoModel';

@Component({
    selector: 'todo-list'
})
@View({
    template: `
        <ul>
            <li *ngFor="#todo of todos" [class.done]="todo.done">
                <div>
                    <span (click)="updateStatus(todo)">{{todo.description}}</span>
                    <input type="checkbox" [(ngModel)]="todo.done" />
                </div>
            </li>
        </ul>
    `,
    styleUrls: ['src/todoApp/todo.css']
})
export class TodoList {

    @Input('items')
    private todos:Array<TodoModel>;

    updateStatus(todo:TodoModel) {
        todo.done = !todo.done;
    }
}