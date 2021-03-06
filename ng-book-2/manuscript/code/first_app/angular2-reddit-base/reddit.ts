import { bootstrap } from 'angular2/platform/browser';
import { Component, View} from 'angular2/core';

class Article {

    constructor(public title:string, public link:string, public votes?:number) {
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes++;
    }

    voteDown() {
        this.votes--;
    }

    domain() {
        try {
            const link:string = this.link.split('//')[1];
            return link.split('/')[0];
        } catch(error) {
            return null;
        }
    }
}

@Component({
    selector: 'reddit-article',
    inputs: ['article:model'],
    host: {
        class: 'row'
    }
})
@View({
    template: `
        <div class="four wide column center aligned votes">
          <div class="ui statistic">
            <div class="value">{{article.votes}} </div>
            <div class="label">Points</div>
          </div>
        </div>
        <div class="twelve wide column">
          <a class="ui large header" href="{{article.link}}">{{article.title}}</a>
          <div class="meta">({{article.domain()}})</div>
          <ul class="ui big horizontal list voters">
            <li class="item"><a href (click)="voteUp()"><i class="arrow up icon"></i>upvote</a></li>
            <li class="item"><a href (click)="voteDown()"><i class="arrow down icon"></i>downvote</a></li>
          </ul>
        </div>
     `
})
class ArticleComponent {

    private article:Article;

    voteUp():boolean {
        this.article.voteUp();
        return false;
    }

    voteDown():boolean {
        this.article.voteDown();
        return false;
    }
}


@Component({
    selector: 'reddit-app'
})
@View({
    directives: [ArticleComponent],
    template: `
        <div>
            <form class="ui large form segment">
                <h3 class="ui header">Add a Link</h3>
                <div class="field">
                  <label for="title">Title:</label>
                  <input name="title" #newtitle>
                </div>
                <div class="field">
                  <label for="link">Link:</label>
                  <input name="link" #newlink>
                </div>
                <button type="submit"
                    (click)="addArticle(newtitle, newlink)"
                    class="ui positive right floated button">Add</button>
            </form>

            <div class="ui grid posts">
                <reddit-article *ngFor="#article of sortedArticles()" [model]="article"></reddit-article>
            </div>
        </div>
    `
})
class RedditComponent {

    private articles:Array<Article> = [];

    constructor() {
        this.articles.push(new Article('Angular2', 'http://angular.io', 1));
        this.articles.push(new Article('Full stack', 'http://fullstack.io', 3));
    }

    addArticle(title:HTMLInputElement, link:HTMLInputElement):boolean {
        console.log(`Adding a new article with title: ${title.value} and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value));
        title.value = link.value = '';
        return false;
    }

    sortedArticles():Array<Article> {
        return this.articles.sort((a:Article, b:Article) => {
            return (b.votes - a.votes);
        });
    }
}

bootstrap(RedditComponent);
