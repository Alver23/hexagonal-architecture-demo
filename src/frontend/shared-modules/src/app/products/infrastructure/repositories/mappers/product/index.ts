export class ProductMapper {
  public id: string;
  public name: string;
  public price: number;
  public picture: string;

  constructor(product: any) {
    const { pictures } = product;
    const [ picture ] = pictures;
    this.picture = picture;
    ({ id: this.id, name: this.name, price: this.price } = product);
  }
}
