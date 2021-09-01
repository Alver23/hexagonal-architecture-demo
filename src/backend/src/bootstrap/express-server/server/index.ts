// Dependencies
import { Application } from 'express';
import cookieParser from 'cookie-parser';
import healthCheck from 'express-healthcheck';

// Middlewares
import RequestLogger from '@backend/core/middlewares/request-logger';

// Config
import config from '@backend/config';

// Interfaces
import { IBootstrap } from '@backend/bootstrap/interfaces';

// Template server
import ServerTemplate from '../server-template';

class Server extends ServerTemplate implements IBootstrap {
  protected server: Application;

  constructor(server: Application, private readonly port: number = 3000, private readonly basePath = '') {
    super();
    this.server = server;
    this.server.set('port', this.port);
  }

  private setDevelopmentMiddlewares() {
    if (!config.isProduction) {
      this.server.use(RequestLogger.handler());
    }
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
  protected errorHandlers(): void {}

  protected setMiddlewares(): void {
    this.server.use(cookieParser());
    this.setDevelopmentMiddlewares();
  }

  protected setRoutes(): void {
    this.server.get(`${this.basePath}/health(check)?`, healthCheck());
  }
}

export default Server;
