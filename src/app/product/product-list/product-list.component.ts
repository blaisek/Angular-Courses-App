import { Component } from '@angular/core';
import { Iproduct, Product } from 'src/app/shared/model/product/product';
import { ProductService } from 'src/app/shared/model/product/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {

  public searchTerm: string = ''
  public showImage: boolean = true
  public products: Product[]

  constructor(productService: ProductService) {
    this.products = productService.getProducts()
  }

public toggleImage(): void {
  this.showImage = !this.showImage
}
public updateStarRating(product: Product, value: number): void {
  product.starRating = value
}

}
