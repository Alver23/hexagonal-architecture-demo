// Dependencies
import { Request } from 'express';
import { OK } from 'http-status-codes';

// Interfaces
import ICustomResponse from '@backend/core/middlewares/response-json/interfaces';

export default class ProductDetailController {
  constructor(private readonly productDetailCommand) {}

  async execute(req: Request, res: ICustomResponse): Promise<any> {
    const {
      params: { id },
    } = req;

    const response = await this.productDetailCommand.execute(id);
    res.responseJson({ data: response, status: OK });
  }
}
