import {Component, View} from 'angular2/core';
import {TodoForm} from './TodoForm';
import {TodoList} from './TodoList';
import {TodoModel} from './TodoModel';

@Component({
    selector: 'todo-app'
})
@View({
    directives: [TodoForm, TodoList],
    template: `<div>
        <h1>Todo App</h1>
        <todo-form (onTaskAdded)="addTask($event)"></todo-form>
        <todo-list [items]="todos"></todo-list>
    </div>`
})
export class TodoApp {

    private todos:Array<TodoModel>;

    constructor() {
        this.todos = [];
    }

    addTask(todo:TodoModel) {
        this.todos.push(todo);
        console.log('New task added!', todo);
    }
}