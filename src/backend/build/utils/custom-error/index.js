"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const http_status_codes_1 = require("http-status-codes");
// Utils
const messages_1 = require("@backend/utils/messages");
class CustomError extends Error {
    constructor(message, code = messages_1.HttpMessages.INTERNAL_ERROR, statusCode = http_status_codes_1.INTERNAL_SERVER_ERROR, data = {}) {
        super(message);
        this.message = message;
        this.code = code;
        this.statusCode = statusCode;
        this.data = data;
    }
}
exports.default = CustomError;
