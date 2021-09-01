"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const debug_1 = __importDefault(require("debug"));
// Config
const config_1 = __importDefault(require("@backend/config"));
const debug = (0, debug_1.default)(`${config_1.default.appName}:request-logger`);
class RequestLogger {
    handler() {
        return (req, res, next) => {
            res.on('finish', () => {
                const { method, originalUrl } = req;
                const { statusCode, statusMessage } = res;
                debug(`${method} ${originalUrl} - ${statusCode} ${statusMessage}`);
            });
            next();
        };
    }
}
exports.default = new RequestLogger();
