// Dependencies
import { Application } from 'express';

// Routes
import productRoutes from '@backend/api/products/infrastructure/routes/products';

export default class ApiRoutes {
  constructor(private readonly app: Application) {}

  public publicRoutes(): void {
    productRoutes(this.app);
  }
}
