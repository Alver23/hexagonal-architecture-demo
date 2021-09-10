import ProductEntity from '@backend/api/products/domain/entities/product';

interface ProductRepository {
  getProducts(): Promise<ProductEntity[]>;
  getProduct(id: string): Promise<ProductEntity>;
}

export default ProductRepository;
