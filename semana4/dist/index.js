class Produto {
    constructor(id, nome, precoCusto) {
        this.id = id;
        this.nome = nome;
        this.precoCusto = precoCusto;
    }
    calcularPrecoVenda() {
        return this.precoCusto;
    }
    imprimirInformacoes() {
        console.log(`ID: ${this.id}, Nome: ${this.nome}, Preço de Venda: R$ ${this.calcularPrecoVenda().toFixed(2)}`);
    }
}
class ProdutoAlimenticio extends Produto {
    constructor(id, nome, precoCusto, dataValidade) {
        super(id, nome, precoCusto);
        this.dataValidade = dataValidade;
    }
    calcularPrecoVenda() {
        return this.precoCusto * 3.1; // Acréscimo de 210%
    }
    imprimirInformacoes() {
        super.imprimirInformacoes();
        console.log(`Data de Validade: ${this.dataValidade.toLocaleDateString()}`);
    }
}
class ProdutoLimpeza extends Produto {
    constructor(id, nome, precoCusto, descricaoAplicacao) {
        super(id, nome, precoCusto);
        this.descricaoAplicacao = descricaoAplicacao;
    }
    calcularPrecoVenda() {
        return this.precoCusto * 1.45; // Acréscimo de 45%
    }
    imprimirInformacoes() {
        super.imprimirInformacoes();
        console.log(`Descrição da Aplicação: ${this.descricaoAplicacao}`);
    }
}
class MaterialEscritorio extends Produto {
    constructor(id, nome, precoCusto, reciclavel) {
        super(id, nome, precoCusto);
        this.reciclavel = reciclavel;
    }
    calcularPrecoVenda() {
        return this.precoCusto * 1.3; // Acréscimo de 30%
    }
    imprimirInformacoes() {
        super.imprimirInformacoes();
        console.log(`Reciclável: ${this.reciclavel ? 'Sim' : 'Não'}`);
    }
}
let produtoAlimenticio = new ProdutoAlimenticio(1, "Maçã", 1.00, new Date(2023, 11, 31));
produtoAlimenticio.imprimirInformacoes();
let produtoLimpeza = new ProdutoLimpeza(2, "Detergente", 2.00, "Usado para louças");
produtoLimpeza.imprimirInformacoes();
let materialEscritorio = new MaterialEscritorio(3, "Papel Reciclado", 3.00, true);
materialEscritorio.imprimirInformacoes();
