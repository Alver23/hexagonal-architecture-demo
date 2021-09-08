"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosInstance = exports.Axios = void 0;
// Dependencies
var axios_1 = __importDefault(require("axios"));
// Interceptors
var response_1 = __importDefault(require("./interceptors/response"));
var DEFAULT_TIMEOUT = 5000;
var Axios = /** @class */ (function () {
    function Axios(configuration) {
        if (configuration === void 0) { configuration = {}; }
        this.http = axios_1.default.create(configuration);
    }
    Axios.prototype.instance = function () {
        this.http.interceptors.response.use((0, response_1.default)());
        return this.http;
    };
    return Axios;
}());
exports.Axios = Axios;
exports.axiosInstance = new Axios({
    timeout: DEFAULT_TIMEOUT,
    headers: { 'content-type': 'application/json' },
}).instance();
