"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetailCommand = exports.ProductListCommand = exports.productRepository = void 0;
var HttpProductRepository_1 = require("./infrastructure/repositories/HttpProductRepository");
Object.defineProperty(exports, "productRepository", { enumerable: true, get: function () { return HttpProductRepository_1.productRepository; } });
var product_list_1 = require("./application/product-list");
Object.defineProperty(exports, "ProductListCommand", { enumerable: true, get: function () { return product_list_1.ProductListCommand; } });
var product_detail_1 = require("./application/product-detail");
Object.defineProperty(exports, "ProductDetailCommand", { enumerable: true, get: function () { return product_detail_1.ProductDetailCommand; } });
