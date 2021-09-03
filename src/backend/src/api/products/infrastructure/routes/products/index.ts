// Dependencies
import { Router, Request, Application } from 'express';

// Controllers
import ProductListController from '@backend/api/products/infrastructure/controllers/products';

// Commands
import ProductsListCommand from '@backend/api/products/application/products-list';

// Repositories
import MongoProductRepository from '@backend/api/products/infrastructure/repositories/mongo-product';
import HttpProductRepository from '@backend/api/products/infrastructure/repositories/http-product';

// Schema
import ProductSchema from '@backend/api/products/infrastructure/schema';

// Middlewares
import AsyncError from '@backend/core/middlewares/async-error';
import ICustomResponse from '@backend/core/middlewares/response-json/interfaces';

const productRepository = new MongoProductRepository(ProductSchema);
// const productRepository = new HttpProductRepository();
const productListCommand = new ProductsListCommand(productRepository);
const productController = new ProductListController(productListCommand);

const basePath = '/products';

export default (app: Application): void => {
  const router = Router();
  app.use(basePath, router);
  router.get(
    '/',
    AsyncError.handler((request: Request, response: ICustomResponse) => productController.execute(request, response))
  );
};
