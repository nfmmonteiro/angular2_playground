
import { NgFor } from "angular2/common";
import { Component, View } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";

class Task {
	description: string;
	done: boolean;

	constructor(description) {
		this.description = description;
		this.done = false;
	}
}

@Component({
    selector: 'todo-app';
})
@View({
	directives: [ NgFor ],
	template: `
		<div>
			<fieldset>
				<label for="task">Task</label>
				<input name="task" #task (keydown)="addTaskEnter($event, task)">
				<button (click)="addTaskBtn(task)">Add</button>
			</fieldset>

			<table>
				<tr *ngFor="#task of tasks">
					<td>{{task.description}}</td>
					<td>{{task.done}}</td>
				</tr>
			</table>
		</div>
	`
})
class TodoApp {
	
	ENTER_KEY_CODE: number = 13;
	tasks: Array<Task> = [];

	doAddTask(taskEl) {
		if (taskEl.value) {
	    	this.tasks.push(new Task(taskEl.value));
	    }
	    taskEl.value = '';
	    taskEl.focus();
	}

	addTaskEnter(event, taskEl) {
		if (event.keyCode == this.ENTER_KEY_CODE) {
			this.doAddTask(taskEl);
		}
	}

	addTaskBtn(taskEl) {
		this.doAddTask(taskEl);
		return false;
	}
}


bootstrap(TodoApp);
