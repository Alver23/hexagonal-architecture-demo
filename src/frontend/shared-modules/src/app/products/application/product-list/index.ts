import { ProductRepository } from "../../domain/respositories/product";
import { ProductEntity } from "../../domain/entities/product";

export class ProductListCommand {
  constructor(private readonly productRepository: ProductRepository) {
  }

  execute(): Promise<ProductEntity[]> {
    return this.productRepository.getProducts()
  }
}
