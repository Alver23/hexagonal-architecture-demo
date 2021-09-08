import { ProductRepository } from "../../domain/respositories/product";
import { ProductEntity } from "../../domain/entities/product";
export declare class ProductListCommand {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    execute(): Promise<ProductEntity[]>;
}
