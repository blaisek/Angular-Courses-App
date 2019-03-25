import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../shared/model/product/product';



@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: Iproduct[], term: string = ''): Iproduct[] {

    if (Array.isArray(value)) {

      return value.filter(product => {
        const values = Object.values(product)
        return values.find(objectValue => {
          if (typeof objectValue === 'string') {
            const sanitizedValue = objectValue.toLowerCase()
            return sanitizedValue.indexOf(term.toLowerCase()) > -1
          } else {
            return false
          }
        })
      })
    } else {
      console.error('Given value must be an array! 💥')
      return[]
    }
}
}
