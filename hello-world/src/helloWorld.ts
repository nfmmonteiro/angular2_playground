import { bootstrap } from "angular2/platform/browser";
import { Component, View } from "angular2/core";

@Component({
	selector: 'hello-message',
	properties: ['itext:otext']
})
@View({
	template: `
		<p>{{ itext }}</p>
	`
})
class HelloMessage {};


@Component({
	selector: 'hello-world-app',
	properties: ['appId']
})
@View({
	directives: [HelloMessage],
	template: `
	    <p>My id is: {{appId}}</p>
		<hello-message 
			[otext]="'This is my very first Angular 2 application!'">
		</hello-message>
	`
})
class HelloWorldApp {}

bootstrap(HelloWorldApp);