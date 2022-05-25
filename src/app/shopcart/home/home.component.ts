import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import City from 'src/app/city.model';
import Product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities!: City[];

  selectedCity!: City;
  products$ !: Observable<Product[]>;



  constructor(private product_service: ProductService) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    
    this.products$ = product_service.getProducts();

  }
  
  ngOnInit(): void {}

}
