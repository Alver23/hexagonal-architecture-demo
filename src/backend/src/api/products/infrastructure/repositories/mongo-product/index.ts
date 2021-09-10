// Entities
import ProductEntity from '@backend/api/products/domain/entities/product';

// Repositories
import ProductRepository from '@backend/api/products/domain/repositories/product';

// Exceptions
import ProductNotFoundException from "@backend/api/products/infrastructure/repositories/exceptions/product";

export default class MongoProductRepository implements ProductRepository {
  constructor(private readonly productSchema) {}

  async getProducts(): Promise<ProductEntity[]> {
    const response = await this.productSchema.find();
    const products = response.map((item) => ({
      /* eslint no-underscore-dangle: 0 */
      id: item._id,
      name: item.name,
      price: item.price,
      pictures: item.pictures.map(({ url }) => url),
    }));
    return products;
  }

  async getProduct(id: string): Promise<ProductEntity> {
    try {
      const product = await this.productSchema.findById(id);
      return {
        id: product._id,
        name: product.name,
        price: +product.price,
        pictures: product.pictures.map(({ url }) => url),
      }
    } catch (error) {
      throw new ProductNotFoundException();
    }
  }
}
