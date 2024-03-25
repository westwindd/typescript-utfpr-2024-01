"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FoodProduct {
    constructor() {
        this.expirationDate = 0;
    }
    getExpirationDate() {
        return this.expirationDate;
    }
    setExpirationDate(expiratioDate) {
        this.expirationDate = expiratioDate;
    }
}
exports.default = FoodProduct;
