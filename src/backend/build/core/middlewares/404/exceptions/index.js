"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const boom_1 = require("@hapi/boom");
// Utils
const custom_error_1 = __importDefault(require("@backend/utils/custom-error"));
class RouteNotFoundException extends custom_error_1.default {
    constructor(originalUrl) {
        const { output: { statusCode }, } = (0, boom_1.notFound)();
        super(`Route '${originalUrl}' does not exist.`, statusCode, statusCode);
    }
}
exports.default = RouteNotFoundException;
