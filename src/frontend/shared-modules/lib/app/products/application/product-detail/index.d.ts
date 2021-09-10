import { ProductRepository } from "../../domain/respositories/product";
import { ProductEntity } from "../../domain/entities/product";
export declare class ProductDetailCommand {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    execute(id: string): Promise<ProductEntity>;
}
