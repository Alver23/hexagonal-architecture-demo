"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Config
const config_1 = __importDefault(require("@backend/config"));
// Utils
const response_json_1 = __importDefault(require("@backend/utils/response-json"));
class ErrorHandler {
    errorWithStack(error, stack) {
        const { statusCode, ...otherValues } = error;
        const response = (0, response_json_1.default)({
            status: statusCode,
            ...otherValues,
        });
        if (!config_1.default.isProduction) {
            return { ...response, stack };
        }
        return response;
    }
    handler() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return (error, req, res, next) => {
            const { output: { statusCode, payload }, stack, data, } = error;
            res.status(statusCode).json(this.errorWithStack({ ...payload, data }, stack));
        };
    }
}
exports.default = new ErrorHandler();
