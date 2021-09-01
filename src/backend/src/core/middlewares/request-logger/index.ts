// Dependencies
import Debug from 'debug';
import { RequestHandler, Request, Response, NextFunction } from 'express';

// Config
import config from '@backend/config';

// Interfaces
import { IMiddleware } from '@backend/core/middlewares/interfaces';

const debug = Debug(`${config.appName}:request-logger`);

class RequestLogger implements IMiddleware {
  handler(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
      res.on('finish', () => {
        const { method, originalUrl } = req;
        const { statusCode, statusMessage } = res;
        debug(`${method} ${originalUrl} - ${statusCode} ${statusMessage}`);
      });
      next();
    };
  }
}

export default new RequestLogger();
