import {EventEmitter, Output, Component, View} from 'angular2/core';
import {TodoModel} from './TodoModel';

@Component({
    selector: 'todo-form'
})
@View({
    template: `
        <form (ngSubmit)="addTask()">
            <input type="text" [(ngModel)]="description" />
            <button type="submit">Add</button>
        </form>
    `
})
export class TodoForm {

    @Output('onTaskAdded')
    private taskEventEmitter:EventEmitter<string>;
    private description:string;

    constructor() {
        this.taskEventEmitter = new EventEmitter<string>();
    }

    addTask() {
        if (this.description) {
            this.taskEventEmitter.next(new TodoModel(this.description));
            this.description = '';
        }
    }
}