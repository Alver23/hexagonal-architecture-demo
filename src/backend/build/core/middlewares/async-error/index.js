"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncError {
    handler(requestHandler) {
        return async (req, res, next) => {
            try {
                return await requestHandler(req, res, next);
            }
            catch (error) {
                return next(error);
            }
        };
    }
}
exports.default = new AsyncError();
