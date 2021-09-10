// Repositories
import ProductRepository from '@backend/api/products/domain/repositories/product';
import ProductEntity from '@backend/api/products/domain/entities/product';

export default class ProductsDetailCommand {
  constructor(private readonly productRepository: ProductRepository) {}

  public execute(id: string): Promise<ProductEntity> {
    return this.productRepository.getProduct(id);
  }
}
