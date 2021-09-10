import { ProductRepository } from "../../domain/respositories/product";
import { ProductEntity } from "../../domain/entities/product";

export class ProductDetailCommand {
  constructor(private readonly productRepository: ProductRepository) {
  }

  execute(id: string): Promise<ProductEntity> {
    return this.productRepository.getProduct(id);
  }
}
