"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const http_status_codes_1 = require("http-status-codes");
const responseToJson = ({ message, data, status, options }) => {
    const statusCode = status ?? http_status_codes_1.OK;
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
exports.default = responseToJson;
