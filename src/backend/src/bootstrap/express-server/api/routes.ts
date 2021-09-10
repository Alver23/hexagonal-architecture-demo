// Dependencies
import { Application } from 'express';

// Routes
import productRoutes from '@backend/api/products/infrastructure/routes/products';
import productDetailRoutes from '@backend/api/products/infrastructure/routes/product-detail'

export default class ApiRoutes {
  constructor(private readonly app: Application) {}

  public publicRoutes(): void {
    productRoutes(this.app);
    productDetailRoutes(this.app);
  }
}
