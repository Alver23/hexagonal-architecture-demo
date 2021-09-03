// Repositories
import ProductRepository from '@backend/api/products/domain/repositories/product';
import ProductEntity from '@backend/api/products/domain/entities/product';

export default class ProductsListCommand {
  constructor(private readonly productRepository: ProductRepository) {}

  public execute(): Promise<ProductEntity[]> {
    return this.productRepository.getProducts();
  }
}
