// Entities
import ProductEntity from '@backend/api/products/domain/entities/product';

// Repositories
import ProductRepository from '@backend/api/products/domain/repositories/product';

import productList from './products';

// Exceptions
import ProductNotFoundException from "@backend/api/products/infrastructure/repositories/exceptions/product";

export default class HttpProductRepository implements ProductRepository {
  async getProducts(): Promise<ProductEntity[]> {
    return productList.map((item) => ({
      id: item.id,
      name: item.name,
      price: +item.price,
      pictures: item.pictures.map(({ url }) => url),
    }));
  }

  async getProduct(id: string): Promise<ProductEntity> {
    const product = productList.find((item) => item.id === id)
    if (product) {
      return {
        id: product.id,
        name: product.name,
        price: +product.price,
        pictures: product.pictures.map(({ url }) => url),
      }

      throw new ProductNotFoundException();
    }
  }
}
