"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onListening = exports.onError = exports.normalizePort = void 0;
// Config
const config_1 = __importDefault(require("@backend/config"));
const normalizePort = (portArg) => {
    const parsed = parseInt(portArg, 10);
    return parsed > 0 ? parsed : false;
};
exports.normalizePort = normalizePort;
const onError = (error, callback) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    callback(error);
};
exports.onError = onError;
const onListening = (callback) => {
    callback(`Listening on port ${config_1.default.port} - Environment: ${config_1.default.environment} - Host: http://localhost:${config_1.default.port}`);
};
exports.onListening = onListening;
