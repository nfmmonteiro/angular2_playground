export class TodoModel {
    public done:boolean;
    constructor(public description:string) {
        this.done = false;
    }
}