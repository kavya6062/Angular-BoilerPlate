import {Component} from 'angular2/core';
import {ProductList} from './app.ProductsList.service'

@Component({
    selector:"products",
    template:`<div>
                <div>
                     <p>Product Names</p>
                </div>
                <div>
                    <ul >
                        <li *ngFor="#product of products" >
                            {{product}}
                        </li>
                    </ul>
                </div>
            </div>`,
    providers:[ProductList]
})
export class Products{
     products;

     constructor(productList:ProductList){
       this.products=productList.getProducts();
     }

} 