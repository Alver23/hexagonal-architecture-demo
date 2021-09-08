import { ProductRepository } from "../../domain/respositories/product";
import { Connector } from "../../../../connector";
import { ProductEntity } from "../../domain/entities/product";
export declare class HttpProductRepository implements ProductRepository {
    private readonly httpClient;
    private readonly baseUrl;
    constructor(httpClient: Connector);
    getProducts(): Promise<ProductEntity[]>;
}
export declare const productRepository: HttpProductRepository;
