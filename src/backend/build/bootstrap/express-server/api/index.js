"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const method_override_1 = __importDefault(require("method-override"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// Middlewares
const _404_1 = __importDefault(require("@backend/core/middlewares/404"));
const response_json_1 = __importDefault(require("@backend/core/middlewares/response-json"));
const error_handler_1 = __importDefault(require("@backend/core/middlewares/error-handler"));
const wrapper_error_1 = __importDefault(require("@backend/core/middlewares/wrapper-error"));
// Template server
const server_template_1 = __importDefault(require("../server-template"));
class ApiServer extends server_template_1.default {
    constructor(server) {
        super();
        this.server = server;
    }
    errorHandlers() {
        this.server.use(_404_1.default.handler());
        this.server.use(wrapper_error_1.default.handler());
        this.server.use(error_handler_1.default.handler());
    }
    setMiddlewares() {
        const rateLimitTime = 15 * 60 * 1000;
        const limitPerRequest = 100;
        const limiter = (0, express_rate_limit_1.default)({
            windowMs: rateLimitTime,
            max: limitPerRequest,
        });
        this.server.use((0, cors_1.default)());
        this.server.use((0, helmet_1.default)());
        this.server.use((0, method_override_1.default)());
        this.server.use(express_1.default.json());
        this.server.use(express_1.default.urlencoded({ extended: false }));
        this.server.use(limiter);
        this.server.use(response_json_1.default.handler());
    }
    setRoutes() {
        this.server.get('/', (req, res) => {
            res.json({ server: 'API' });
        });
    }
}
exports.default = ApiServer;
