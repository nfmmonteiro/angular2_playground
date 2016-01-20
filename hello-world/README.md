This is the first Angular 2 app that I wrote.

I found it particularly odd that I couldn't pass a property to the root component (see example with appId).
The same mechanism was used when passing otext property to the hello-message component. Can someone explain me this?

I also noticed that Angular 2 does not normalizes an element's tag and attribute name the same way as Angular 1. In Angular 1, we define the helloWorld directive and we use it as hello-world in the HTML. In Angular 2, we specify on the component' selector the exact form of how we use the component in the HTML.

I found it a bit difficult to:
 - interpret errors in the console
 - find reliable documentation for the angular version used here (2.0.0-beta.0) because there were quite a lot of changes for the alpha version.

