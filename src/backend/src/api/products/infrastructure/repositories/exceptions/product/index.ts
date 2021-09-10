// Dependencies
import { notFound } from '@hapi/boom';

// Utils
import CustomError from '@backend/utils/custom-error';

export default class ProductNotFoundException extends CustomError {
  constructor() {
    const {
      output: { statusCode },
    } = notFound();
    super('The product does not exist', statusCode, statusCode);
  }
}
