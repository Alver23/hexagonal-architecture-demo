// Dependencies
import { NextFunction, Request, RequestHandler, Response } from 'express';

// Interfaces
import { IMiddleware } from '@backend/core/middlewares/interfaces';

// Exceptions
import RouteNotFoundException from './exceptions';

class FourOrFour implements IMiddleware {
  handler(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
      next(new RouteNotFoundException(req.originalUrl));
    };
  }
}

export default new FourOrFour();
