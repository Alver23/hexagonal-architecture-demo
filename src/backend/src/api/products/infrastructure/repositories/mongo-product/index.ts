// Entities
import ProductEntity from '@backend/api/products/domain/entities/product';

// Repositories
import ProductRepository from '@backend/api/products/domain/repositories/product';

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
}
