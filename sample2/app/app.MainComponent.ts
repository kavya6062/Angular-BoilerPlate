import {Component} from 'angular2/core';
import {Products} from './app.Products';
import {Customers} from './app.Customers';

@Component({
    selector:"hello",
    template:`<h4> Hello World </h4>  <products></products>`,
    directives:[Products]
})
/**@Component({
    selector:"hello",
    template:`<customers></customers> `,
    directives:[Customers]
})*/
export class MainComponent{}