// Dependencies
import { OK } from 'http-status-codes';
import { NextFunction, Request, RequestHandler } from 'express';

// Utils
import responseToJson from '@backend/utils/response-json';

// Interfaces
import { IMiddleware } from '@backend/core/middlewares/interfaces';
import ICustomResponse from './interfaces';

class ResponseToJson implements IMiddleware {
  handler(): RequestHandler {
    return (req: Request, res: ICustomResponse, next: NextFunction): void => {
      res.responseJson = ({ data, message, status, options }): void => {
        res.status(status || OK).json(responseToJson({ data, message, status, options }));
      };
      next();
    };
  }
}

export default new ResponseToJson();
