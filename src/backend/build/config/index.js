"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    appName: process.env.API_NAME,
    environment: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === 'production',
    port: process.env.API_PORT || 3000,
};
