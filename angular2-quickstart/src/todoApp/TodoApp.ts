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
        <div>{{remaining()}} of {{todos.length}} remaining</div>
        <div><button type="button" (click)="archive()">Archive</button></div>
        <todo-form (onTaskAdded)="addTask($event)"></todo-form>
        <todo-list [items]="todos"></todo-list>
    </div>`
})
export class TodoApp {

    private todos:Array<TodoModel>;

    constructor() {
        this.todos = [
            new TodoModel('Learn Angular2'),
            new TodoModel('Learn ES6', true)
        ];
    }

    addTask(todo:TodoModel) {
        this.todos.push(todo);
        console.log('New task added!', todo);
    }

    remaining() {
        return this.todos.filter((todo) => !todo.done).length;
    }

    archive() {
        this.todos = this.todos.filter((todo) => !todo.done);
    }
}