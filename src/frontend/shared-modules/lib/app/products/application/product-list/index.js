"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListCommand = void 0;
var ProductListCommand = /** @class */ (function () {
    function ProductListCommand(productRepository) {
        this.productRepository = productRepository;
    }
    ProductListCommand.prototype.execute = function () {
        return this.productRepository.getProducts();
    };
    return ProductListCommand;
}());
exports.ProductListCommand = ProductListCommand;
