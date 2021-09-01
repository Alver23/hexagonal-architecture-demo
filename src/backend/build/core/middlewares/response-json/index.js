"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const http_status_codes_1 = require("http-status-codes");
// Utils
const response_json_1 = __importDefault(require("@backend/utils/response-json"));
class ResponseToJson {
    handler() {
        return (req, res, next) => {
            res.responseJson = ({ data, message, status, options }) => {
                res.status(status || http_status_codes_1.OK).json((0, response_json_1.default)({ data, message, status, options }));
            };
            next();
        };
    }
}
exports.default = new ResponseToJson();
