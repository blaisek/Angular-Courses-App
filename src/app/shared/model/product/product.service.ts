import { Injectable } from '@angular/core';
import { Product, Iproduct } from './product';
import {HttpClient} from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private products: BehaviorSubject<Product[]>
private products$: Observable<Product[]>

constructor(private http: HttpClient) {
  this.products = new BehaviorSubject([])
  this.products$ = this.products.asObservable()
  this.fetch()
}

public fetch(): void {
this.http
.get('http://localhost:3000/products')
.pipe(
  map((products: Iproduct[]) => {
    return products.map((product: Iproduct) => new Product(product))
  }),
  tap((products: Product[]) => console.log(`products server run ${products.length}`))
)
.subscribe((products: Product[]) => this.products.next(products))
}

  public getProducts(): Observable<Product[]> {
    return this.products$
  }

  public getProductById(id: number): Observable<Product> {
    return this.products$.pipe(

      map((products: Product[]) => {

        return products.find((product: Product) => {
          return product.id === id
        })
      })
    )
  }

}
