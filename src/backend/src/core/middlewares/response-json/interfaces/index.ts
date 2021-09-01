// Dependencies
import { Response } from 'express';

type ICustomResponse = Response & { responseJson: (params) => void };

export default ICustomResponse;
