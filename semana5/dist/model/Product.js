"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor() {
        this.id = 0;
        this.name = "";
        this.costPrice = 0;
        this.salePrice = 0;
    }
    //respectivos gets e sets
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getCostPrice() {
        return this.costPrice;
    }
    setCostPrice(costPrice) {
        this.costPrice = costPrice;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSalePrice() {
        return this.salePrice;
    }
    setSalePrice(salePrice) {
        this.salePrice = salePrice;
    }
    computeSalePrice() { }
}
exports.default = Product;
