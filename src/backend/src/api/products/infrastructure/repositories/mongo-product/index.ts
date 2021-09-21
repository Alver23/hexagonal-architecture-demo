// Entities
import ProductEntity from '@backend/api/products/domain/entities/product';

// Repositories
import ProductRepository from '@backend/api/products/domain/repositories/product';

import MongoProductResponse from "@backend/api/products/infrastructure/repositories/mongo-product/interfaces";

// Mappers
import ProductMapper from "@backend/api/products/infrastructure/repositories/mappers/product";

// Exceptions
import ProductNotFoundException from "@backend/api/products/infrastructure/repositories/exceptions/product";

export default class MongoProductRepository implements ProductRepository {
  constructor(private readonly productSchema) {}

  async getProducts(): Promise<ProductEntity[]> {
    const response: MongoProductResponse[] = await this.productSchema.find();
    const products = response.map((item) => new ProductMapper(item));
    return products;
  }

  async getProduct(id: string): Promise<ProductEntity> {
    try {
      const product: MongoProductResponse = await this.productSchema.findById(id);
      return new ProductMapper(product);
    } catch (error) {
      throw new ProductNotFoundException();
    }
  }
}
