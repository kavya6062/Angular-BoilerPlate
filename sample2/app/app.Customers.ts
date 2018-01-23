import {Component} from 'angular2/core';
import {CustomerList} from './CustomerList';

@Component({
    selector:"customers",
    template:`<div>
                <div>
                     <p>Customer List</p>
                </div>
                <div>
                    <ul >
                        <li *ngFor="#customer of Customers" >
                            {{customer}}
                        </li>
                    </ul>
                </div>
            </div>`,
    providers:[CustomerList]
})

export class Customers{
    customers;

    constructor(CustomerList:CustomerList){
        this.customers=CustomerList.getCustomers();
    }

}