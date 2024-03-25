import CleaningProduct from "./model/CleaningProduct";

let qboa = new CleaningProduct();
qboa.setName("Água sanitaria");
qboa.setId(1);
qboa.setCostPrice(10.00);
qboa.computeSalePrice();
qboa.setDescription("Feita para limpar banheiros");

console.log("id do produto: "+qboa.getId()+"\nnome: "+qboa.getName()+"\ncusto: "+qboa.getCostPrice()+"\nPreço venda: "+qboa.getSalePrice());
console.log("Descrição "+qboa.getDescription());