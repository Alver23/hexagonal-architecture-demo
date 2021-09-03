// Dependencies
import cors from 'cors';
import express, { Application } from 'express';
import methodOverride from 'method-override';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

// Middlewares
import FourOrFour from '@backend/core/middlewares/404';
import ResponseToJson from '@backend/core/middlewares/response-json';
import ErrorHandler from '@backend/core/middlewares/error-handler';
import WrapperError from '@backend/core/middlewares/wrapper-error';

// Routes
import { IBootstrap } from '@backend/bootstrap/interfaces';
import ApiRoutes from './routes';

// Interfaces

// Template server
import ServerTemplate from '../server-template';

class ApiServer extends ServerTemplate implements IBootstrap {
  private readonly apiRoutes: ApiRoutes;

  constructor(protected readonly server: Application) {
    super();
    this.apiRoutes = new ApiRoutes(this.server);
  }

  protected errorHandlers(): void {
    this.server.use(FourOrFour.handler());
    this.server.use(WrapperError.handler());
    this.server.use(ErrorHandler.handler());
  }

  protected setMiddlewares(): void {
    const rateLimitTime = 15 * 60 * 1000;
    const limitPerRequest = 100;
    const limiter = rateLimit({
      windowMs: rateLimitTime,
      max: limitPerRequest,
    });
    this.server.use(cors());
    this.server.use(helmet());
    this.server.use(methodOverride());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(limiter);
    this.server.use(ResponseToJson.handler());
  }

  protected setRoutes(): void {
    this.apiRoutes.publicRoutes();
  }
}

export default ApiServer;
