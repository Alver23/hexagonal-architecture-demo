"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const http_1 = __importDefault(require("http"));
const debug_1 = __importDefault(require("debug"));
// Config
const config_1 = __importDefault(require("@backend/config"));
// Utils
const commons_1 = require("./commons");
class HttpServer {
    constructor(server, port) {
        this.server = server;
        this.port = port;
        this.debug = (0, debug_1.default)(`${config_1.default.appName}:http-server`);
        this.debugLog = this.debugLog.bind(this);
    }
    debugLog(log) {
        this.debug(log);
    }
    async initialize() {
        return new Promise((resolve, reject) => {
            const httpServer = http_1.default.createServer(this.server);
            httpServer.listen(this.port);
            httpServer.on('listening', () => {
                (0, commons_1.onListening)(this.debugLog);
                resolve('');
            });
            httpServer.on('error', (error) => {
                (0, commons_1.onError)(error, this.debugLog);
                reject(error);
            });
        });
    }
}
exports.default = HttpServer;
