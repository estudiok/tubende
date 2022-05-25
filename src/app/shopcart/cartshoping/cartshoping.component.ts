import { Component, OnInit } from '@angular/core';
import City from 'src/app/city.model';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-cartshoping',
  templateUrl: './cartshoping.component.html',
  styleUrls: ['./cartshoping.component.scss']
})
export class CartshopingComponent implements OnInit {

  selectedValues: string[] = ['adasd', 'asd'];

  cities: City[];

    selectedCity !: City;
    products : Product[] = [];

    constructor() {
        this.cities = [
            {name: '1', code: '1'},
            {name: '2', code: '2'},
            {name: '3', code: '3'},
            {name: '4', code: '4'},
            {name: '5', code: '5'},
            {name: '6', code: '6'},
            {name: '7', code: '7'},
            {name: '8', code: '8'},
            {name: '9', code: '9'},
            {name: '10', code: '10'}
        ];

        let products: any = localStorage.getItem('products');
        this.products = (JSON.parse(products) as Product[]);
        console.log(this.products);

    }



  ngOnInit(): void {
  }

}
