import { ProductEntity } from "../../entities/product";

export interface ProductRepository {
  getProducts(): Promise<ProductEntity[]>
  getProduct(id: string): Promise<ProductEntity>
}
