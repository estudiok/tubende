import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import Product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  subRoute !: Subscription;
  idRoute !: string;
  product$ !: Observable<Product>;
  productStorage : Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private product_service: ProductService,
    private router: Router
  ) { 
    
    this.subRoute = this.route.params.subscribe((params) => {
      this.idRoute = params['id'];
    });

    this.product$ = product_service.getProduct(this.idRoute);

    console.log(this.idRoute);

  }



  ngOnInit(): void {

  }

  saveCart(product: Product) {

    if (
      localStorage.getItem('products') != 'undefined' &&
      localStorage.getItem('products') != null &&
      localStorage.getItem('products') != undefined
    ) {
      // let arrayProduct: Product[] = [];
      let products: any = localStorage.getItem('products');
      this.productStorage = JSON.parse(products) as Product[];
      this.productStorage.push(product);
      localStorage.setItem('products', JSON.stringify(this.productStorage));
      
    } else {
      this.productStorage = [];
      this.productStorage.push(product)
      localStorage.setItem('products', JSON.stringify(this.productStorage));

    }

    // console.log("hola")
    this.router.navigate(["cartshoping"]);
  }

  ngOnDestroy(): void {
    this.subRoute.unsubscribe();
  }

}
