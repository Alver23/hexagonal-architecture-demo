"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetailCommand = void 0;
var ProductDetailCommand = /** @class */ (function () {
    function ProductDetailCommand(productRepository) {
        this.productRepository = productRepository;
    }
    ProductDetailCommand.prototype.execute = function (id) {
        return this.productRepository.getProduct(id);
    };
    return ProductDetailCommand;
}());
exports.ProductDetailCommand = ProductDetailCommand;
