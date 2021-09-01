"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boom_1 = require("@hapi/boom");
// Utils
const custom_error_1 = __importDefault(require("@backend/utils/custom-error"));
class WrapperError {
    handler() {
        return (error, req, res, next) => {
            if (error instanceof custom_error_1.default) {
                next((0, boom_1.boomify)(error, { statusCode: error.statusCode }));
            }
            if (!error.isBoom) {
                next((0, boom_1.badImplementation)(error));
            }
            next(error);
        };
    }
}
exports.default = new WrapperError();
