import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/model/product/product.service';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';
import { Observable } from 'rxjs';
import {filter, map, switchMap, tap} from 'rxjs/operators'
import { Product } from 'src/app/shared/model/product/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  public product$: Observable<Product>

  constructor(productService: ProductService, route: ActivatedRoute) {

const id$ = route.paramMap
    .pipe(

      map((paramMap: ParamMap) => paramMap.get('id')),

      map((id: string) => Number(id)),
      filter((id: number) => !isNaN(id) && id > 0),
      tap((id: number) => console.log(`id is ${id}`))
    )

this.product$ = id$.pipe(

        switchMap((id: number) => productService.getProductById(id))
      )

   }


}
