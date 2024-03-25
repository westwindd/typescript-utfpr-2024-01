"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CleaningProduct_1 = __importDefault(require("./model/CleaningProduct"));
let qboa = new CleaningProduct_1.default();
qboa.setName("Água sanitaria");
qboa.setId(1);
qboa.setCostPrice(10.00);
qboa.computeSalePrice();
qboa.setDescription("Feita para limpar banheiros");
console.log("id do produto: " + qboa.getId() + "\nnome: " + qboa.getName() + "\ncusto: " + qboa.getCostPrice() + "\nPreço venda: " + qboa.getSalePrice());
console.log("Descrição " + qboa.getDescription());
