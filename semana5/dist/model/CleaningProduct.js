"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class CleaningProduct extends Product_1.default {
    constructor() {
        super(...arguments);
        this.description = "";
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    computeSalePrice() {
        super.setSalePrice(super.getCostPrice() * 1.45);
    }
}
exports.default = CleaningProduct;
