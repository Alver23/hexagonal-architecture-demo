// Dependencies
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { badImplementation, boomify } from '@hapi/boom';

// Interfaces
import { IMiddleware } from '@backend/core/middlewares/interfaces';

// Utils
import CustomError from '@backend/utils/custom-error';

class WrapperError implements IMiddleware {
  public handler(): ErrorRequestHandler {
    return (error: any, req: Request, res: Response, next: NextFunction): void => {
      if (error instanceof CustomError) {
        next(boomify(error, { statusCode: error.statusCode }));
      }

      if (!error.isBoom) {
        next(badImplementation(error));
      }

      next(error);
    };
  }
}

export default new WrapperError();
