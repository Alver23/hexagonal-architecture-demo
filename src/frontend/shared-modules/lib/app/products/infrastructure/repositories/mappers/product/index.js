"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMapper = void 0;
var ProductMapper = /** @class */ (function () {
    function ProductMapper(product) {
        var pictures = product.pictures;
        var picture = pictures[0];
        this.picture = picture;
        (this.id = product.id, this.name = product.name, this.price = product.price);
    }
    return ProductMapper;
}());
exports.ProductMapper = ProductMapper;
