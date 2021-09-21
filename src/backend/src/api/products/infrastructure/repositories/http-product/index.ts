// Entities
import ProductEntity from '@backend/api/products/domain/entities/product';

// Repositories
import ProductRepository from '@backend/api/products/domain/repositories/product';

import productList from './products';
import ProductApiResponse from "@backend/api/products/infrastructure/repositories/http-product/interfaces";

// Mappers
import ProductMapper from "@backend/api/products/infrastructure/repositories/mappers/product";

// Exceptions
import ProductNotFoundException from "@backend/api/products/infrastructure/repositories/exceptions/product";

export default class HttpProductRepository implements ProductRepository {
  async getProducts(): Promise<ProductEntity[]> {
    return productList.map((item: ProductApiResponse) => new ProductMapper(item));
  }

  async getProduct(id: string): Promise<ProductEntity> {
    const product = productList.find((item: ProductApiResponse) => item.id === id);
    if (product) {
      return new ProductMapper(product)
    }

    throw new ProductNotFoundException();
  }
}
