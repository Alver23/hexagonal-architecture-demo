// Dependencies
import { Request } from 'express';

// Utils
import { HttpMessages } from '@backend/utils/messages';

// Interfaces
import ICustomResponse from '@backend/core/middlewares/response-json/interfaces';

export default class ProductListController {
  constructor(private readonly productListCommand) {}

  async execute(req: Request, res: ICustomResponse): Promise<any> {
    const response = await this.productListCommand.execute(req.body);
    res.responseJson({ message: HttpMessages.LISTS, data: response });
  }
}
