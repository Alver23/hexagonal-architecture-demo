"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = exports.axiosInstance = exports.Axios = void 0;
var axios_1 = require("./axios");
Object.defineProperty(exports, "Axios", { enumerable: true, get: function () { return axios_1.Axios; } });
Object.defineProperty(exports, "axiosInstance", { enumerable: true, get: function () { return axios_1.axiosInstance; } });
var connector_1 = require("./connector");
Object.defineProperty(exports, "Connector", { enumerable: true, get: function () { return connector_1.Connector; } });
__exportStar(require("./app/products"), exports);
