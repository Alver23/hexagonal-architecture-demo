"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
// Connector
var connector_error_1 = require("./connector-error");
var Connector = /** @class */ (function () {
    function Connector(http) {
        this.http = http;
    }
    Connector.prototype.get = function (url, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        return new Promise(function (resolve, reject) {
            _this.http
                .get(url, config)
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject((0, connector_error_1.connectorError)(error)); });
        });
    };
    Connector.prototype.post = function (url, body, config) {
        var _this = this;
        if (body === void 0) { body = {}; }
        if (config === void 0) { config = {}; }
        return new Promise(function (resolve, reject) {
            _this.http
                .post(url, body, config)
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject((0, connector_error_1.connectorError)(error)); });
        });
    };
    Connector.prototype.put = function (url, body, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        return new Promise(function (resolve, reject) {
            _this.http
                .put(url, body, config)
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject((0, connector_error_1.connectorError)(error)); });
        });
    };
    Connector.prototype.delete = function (url, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        return new Promise(function (resolve, reject) {
            _this.http
                .delete(url, config)
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject((0, connector_error_1.connectorError)(error)); });
        });
    };
    return Connector;
}());
exports.Connector = Connector;
