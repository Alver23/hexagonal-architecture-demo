// Entities
import ProductEntity from '@backend/api/products/domain/entities/product';

// Repositories
import ProductRepository from '@backend/api/products/domain/repositories/product';

import productList from './products';

export default class HttpProductRepository implements ProductRepository {
  async getProducts(): Promise<ProductEntity[]> {
    return productList.map((item) => ({
      id: item.id,
      name: item.name,
      price: +item.price,
      pictures: item.pictures.map(({ url }) => url),
    }));
  }
}
