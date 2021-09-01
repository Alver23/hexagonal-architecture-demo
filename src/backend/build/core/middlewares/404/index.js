"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Exceptions
const exceptions_1 = __importDefault(require("./exceptions"));
class FourOrFour {
    handler() {
        return (req, res, next) => {
            next(new exceptions_1.default(req.originalUrl));
        };
    }
}
exports.default = new FourOrFour();
