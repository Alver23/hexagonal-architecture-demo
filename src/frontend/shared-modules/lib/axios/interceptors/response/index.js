"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var responseInterceptor = function () { return function (response) { return response.data; }; };
exports.default = responseInterceptor;
