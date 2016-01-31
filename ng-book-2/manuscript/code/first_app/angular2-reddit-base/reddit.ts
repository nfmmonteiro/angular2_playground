import { bootstrap } from 'angular2/platform/browser';
import { Component, View} from 'angular2/core';

class RedditArticle {
    private votes:number;

    constructor(private title:string, private link:string) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }

    voteUp() {
        this.votes++;
    }

    voteDown() {
        this.votes--;
    }
}

@Component({
    selector: 'reddit-app'
})
@View({
    styleUrls: ['reddit.css'],
    template: `
        <div>
            <form>
                <fieldset>
                    <label for="title">Title</label>
                    <input name="title" #title>
                </fieldset>
                <fieldset>
                    <label for="link">Link</label>
                    <input name="link" #link>
                </fieldset>
                <button type="submit" (click)="addArticle(title, link)">Add</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Link</th>
                        <th>Votes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="#article of articles; #index=index">
                        <td>{{article.title}}</td>
                        <td>{{article.link}}</td>
                        <td>
                            {{article.votes}}
                            <a href="#" (click)="voteUp(article)">Up</a>
                            <a href="#" (click)="voteDown(article)">Down</a>
                            <a href="#" (click)="remove(index)">Remove</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
class RedditApp {

    private articles:Array<RedditArticle> = [];

    constructor(){
        this.articles.push(new RedditArticle('Angular2', 'http://angular.io'));
        this.articles.push(new RedditArticle('Full stack', 'http://fullstack.io'));
    }

    addArticle(title, link) {
        console.log(title.value, link.value);
        this.articles.push(new RedditArticle(title.value, link.value));
        return false;
    }

    voteUp(article:RedditArticle) {
        article.voteUp();
        return this.stopPropagation();
    }

    voteDown(article:RedditArticle) {
        article.voteDown();
        return this.stopPropagation();
    }

    remove(index) {
        this.articles.splice(index, 1);
        return this.stopPropagation();
    }

    stopPropagation () {
        // on submit prevents the page to reload
        // on click prevents the page to scroll up
        return false;
    }
}

bootstrap(RedditApp);
