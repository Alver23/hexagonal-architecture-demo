"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectorError = exports.ConnectorError = void 0;
var ConnectorError = /** @class */ (function () {
    function ConnectorError(status, message) {
        this.status = status;
        this.message = message;
    }
    return ConnectorError;
}());
exports.ConnectorError = ConnectorError;
var connectorError = function (error) {
    var _a = error.response, response = _a === void 0 ? { data: {} } : _a;
    var _b = response.data, data = _b === void 0 ? { status: 0, message: '' } : _b;
    if (!data) {
        data = { status: 500, message: 'Internal server error' };
    }
    var _c = data.status, status = _c === void 0 ? 500 : _c, _d = data.message, message = _d === void 0 ? 'Internal server error' : _d;
    return new ConnectorError(status, message);
};
exports.connectorError = connectorError;
