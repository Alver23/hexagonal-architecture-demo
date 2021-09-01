"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerTemplate {
    async initialize() {
        this.setMiddlewares();
        this.setRoutes();
        this.errorHandlers();
        return this.server;
    }
}
exports.default = ServerTemplate;
