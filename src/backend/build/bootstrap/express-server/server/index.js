"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_healthcheck_1 = __importDefault(require("express-healthcheck"));
// Middlewares
const request_logger_1 = __importDefault(require("@backend/core/middlewares/request-logger"));
// Config
const config_1 = __importDefault(require("@backend/config"));
// Template server
const server_template_1 = __importDefault(require("../server-template"));
class Server extends server_template_1.default {
    constructor(server, port = 3000, basePath = '') {
        super();
        this.port = port;
        this.basePath = basePath;
        this.server = server;
        this.server.set('port', this.port);
    }
    setDevelopmentMiddlewares() {
        if (!config_1.default.isProduction) {
            this.server.use(request_logger_1.default.handler());
        }
    }
    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
    errorHandlers() { }
    setMiddlewares() {
        this.server.use((0, cookie_parser_1.default)());
        this.setDevelopmentMiddlewares();
    }
    setRoutes() {
        this.server.get(`${this.basePath}/health(check)?`, (0, express_healthcheck_1.default)());
    }
}
exports.default = Server;
