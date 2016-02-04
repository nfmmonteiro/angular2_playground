import {EventEmitter, Output, Component, View} from 'angular2/core';
import {TodoModel} from './TodoModel';

@Component({
    selector: 'todo-form'
})
@View({
    template: `
        <form (ngSubmit)="addTask()">
            <input type="text" [(ngModel)]="description" size="30" placeholder="add your task here..."/>
            <button type="submit">Add</button>
        </form>
    `
})
export class TodoForm {

    @Output('onTaskAdded')
    private taskEventEmitter:EventEmitter<TodoModel>;
    private description:string;

    constructor() {
        this.taskEventEmitter = new EventEmitter<TodoModel>();
    }

    addTask() {
        if (this.description) {
            this.taskEventEmitter.emit(new TodoModel(this.description));
            this.description = '';
        }
    }
}