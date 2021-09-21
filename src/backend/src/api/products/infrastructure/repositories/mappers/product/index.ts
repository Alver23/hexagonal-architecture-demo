import ProductEntity from "@backend/api/products/domain/entities/product";

export default class ProductMapper implements ProductEntity {
  public id: string;
  public name: string;
  public price: number;
  public pictures: string[];

  constructor(product) {
    const { id, _id, pictures, price, name } = product;
    this.pictures = pictures.map(({ url }) => url);
    this.id = id || _id;
    this.name = name;
    this.price = +price;
  }
}
