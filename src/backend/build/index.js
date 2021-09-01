"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
require("module-alias/register");
const express_1 = __importDefault(require("express"));
// Bootstrap
const api_1 = __importDefault(require("@backend/bootstrap/express-server/api"));
const server_1 = __importDefault(require("@backend/bootstrap/express-server/server"));
const http_server_1 = __importDefault(require("@backend/bootstrap/http-server"));
// Config
const config_1 = __importDefault(require("@backend/config"));
// Commons
const commons_1 = require("@backend/bootstrap/http-server/commons");
const basePath = '';
const port = (0, commons_1.normalizePort)(config_1.default.port);
const start = async () => {
    try {
        const expressServer = new server_1.default((0, express_1.default)(), port);
        const apiServer = new api_1.default((0, express_1.default)());
        const apiServerInitialization = await apiServer.initialize();
        const server = await expressServer.initialize();
        server.use(`${basePath}/api`, apiServerInitialization);
        const httpServer = new http_server_1.default(server, port);
        await httpServer.initialize();
    }
    catch (e) {
        process.exit(1);
    }
};
start();
