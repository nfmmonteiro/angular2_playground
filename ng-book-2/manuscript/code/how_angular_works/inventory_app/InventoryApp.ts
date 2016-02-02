import {bootstrap} from 'angular2/platform/browser';
import {Component, View, EventEmitter} from 'angular2/core';
import {Input} from "angular2/core";
import {Output} from "angular2/core";

class Product {
    constructor(public sku:string,
                public name:string,
                public imageUrl:string,
                public department:Array<string>,
                public price:number) {
    }
}

@Component({
    selector: 'product-image',
    host: {
        class: 'ui small image'
    },
    template: '<img class="product-image" [src]="imageUrl" />'
})
class ProductImage {
    @Input()
    private imageUrl:string;
}

@Component({
    selector: 'product-department',
    template: `
        <div class="product-department">
            <span *ngFor="#name of department; #index=index">
                <a href="#">{{name}}</a>
                <span>{{(index < department.length -1) ? '>' : ''}}</span>
            </span>
        </div>
    `
})
class ProductDepartment {
    @Input()
    private department:Array<string>;
}

@Component({
    selector: 'product-price',
    template: `<div class="price-display">\${{price}}</div>`
})
class ProductPrice {
    @Input()
    private price:number;
}

@Component({
    selector: 'product-row',
    host: {
        class: 'item'
    }
})
@View({
    directives: [ProductImage, ProductDepartment, ProductPrice],
    template: `
        <product-image [imageUrl]="product.imageUrl"></product-image>
        <div class="content">
            <div class="header">{{product.name}}</div>
            <div class="meta">
                <div class="product-sku">SKU #{{product.sku}}</div>
            </div>
            <div class="description">
                <product-department [department]="product.department"></product-department>
            </div>
        </div>
        <product-price [price]="product.price"></product-price>
    `
})
class ProductRow {
    @Input()
    private product:Product;
}

@Component({
    selector: 'products-list',
})
@View({
    directives: [ProductRow],
    template: `
        <div class="ui items">
            <product-row *ngFor="#product of products"
                [product]="product"
                (click)="selectProduct(product)"
                [class.selected]="isSelected(product)">
            </product-row>
        </div>
    `
})
class ProductsList {

    @Input('productList')
    private products:Array<Product>;
    @Output()
    private onProductSelected:EventEmitter<Product>;
    private currentProduct:Product;

    constructor() {
        this.onProductSelected = new EventEmitter<Product>();
    }

    selectProduct(product:Product):void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    isSelected(product:Product):boolean {
        return this.currentProduct === product;
    }
}

@Component({
    selector: '[inventory-app]',
    host: {
        class: 'inventory-app-container'
    }
})
@View({
    directives: [ProductsList],
    template: `
        <div class="inventory-app">
            <products-list
                [productList]="products"
                (onProductSelected)="productWasSelected($event)">
            </products-list>
        </div>
    `
})
class InventoryApp {

    private products:Array<Product> = [];

    constructor() {
        [1, 2, 3].forEach((number) => {
            this.products.push(new Product(`NICEHAT ${number}`,
                `A Nice Black Hat ${number}`,
                '/resources/images/products/black-hat.jpg',
                ['Men', 'Accessories', 'Hats'],
                29.99));
        });
    }

    productWasSelected(product:Product):void {
        console.log('Product was selected', product);
    }
}

bootstrap(InventoryApp);
