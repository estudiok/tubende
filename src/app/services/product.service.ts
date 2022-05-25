import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL_API = 'http://localhost:4000/api/products'

  constructor(
    private http: HttpClient
  ) { }

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.URL_API);
  }

  getProduct(_id: string):Observable<Product> {
    return this.http.get<Product>(`${this.URL_API}/${_id}`)
  }

}
