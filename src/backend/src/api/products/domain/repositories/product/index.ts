import ProductEntity from '@backend/api/products/domain/entities/product';

interface ProductRepository {
  getProducts(): Promise<ProductEntity[]>;
}

export default ProductRepository;
