// Dependencies
import { NextFunction, Request, RequestHandler, Response } from 'express';

// Interfaces
import { IMiddleware } from '@backend/core/middlewares/interfaces';

class AsyncError implements IMiddleware {
  handler(requestHandler: RequestHandler): RequestHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        return await requestHandler(req, res, next);
      } catch (error) {
        return next(error);
      }
    };
  }
}

export default new AsyncError();
