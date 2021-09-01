// Dependencies
import { OK } from 'http-status-codes';

// Interfaces
import { IResponseJson } from './interfaces';

const responseToJson = ({ message, data, status, options }: IResponseJson): IResponseJson => {
  const statusCode = status ?? OK;
  let additionalOptions = {};

  if (options) {
    additionalOptions = options;
  }
  return {
    message,
    status: statusCode,
    data,
    ...additionalOptions,
  };
};

export default responseToJson;
