
export interface Iproduct {
    id: number
    productName: string
    productCode: string
    releaseDate: string
    description: string
    price: number
    starRating: number
    imageUrl: string
  }


export class Product implements Iproduct {

       public id: number
       public productName: string
       public productCode: string
       public releaseDate: string
       public description: string
       public price: number
       public starRating: number
       public imageUrl: string

    constructor(data: Iproduct) {
      this.fromData(data)
    }

    public fromData(data: Iproduct) {

        this.id = data.id || null
        this.productName = data.productName || ''
        this.productCode = data.productCode || ''
        this.releaseDate = data.releaseDate || ''
        this.description = data.description || ''
        this.price = data.price || 0
        this.starRating = data.starRating || 0
        this.imageUrl = data.imageUrl || ''
    }

    public toString(): string {
        return `#${this.id} - ${this.productName} - ${this.price}`
      }
}
