abstract class Produto {
  protected id: number;
  protected nome: string;
  protected precoCusto: number;

  constructor(id: number, nome: string, precoCusto: number) {
      this.id = id;
      this.nome = nome;
      this.precoCusto = precoCusto;
  }

  calcularPrecoVenda(): number {
      return this.precoCusto;
  }

  imprimirInformacoes(): void {
      console.log(`ID: ${this.id}, Nome: ${this.nome}, Preço de Venda: R$ ${this.calcularPrecoVenda().toFixed(2)}`);
  }
}
class ProdutoAlimenticio extends Produto {
  private dataValidade: Date;

  constructor(id: number, nome: string, precoCusto: number, dataValidade: Date) {
      super(id, nome, precoCusto);
      this.dataValidade = dataValidade;
  }

  calcularPrecoVenda(): number {
      return this.precoCusto * 3.1; // Acréscimo de 210%
  }

  imprimirInformacoes(): void {
      super.imprimirInformacoes();
      console.log(`Data de Validade: ${this.dataValidade.toLocaleDateString()}`);
  }
}

class ProdutoLimpeza extends Produto {
  private descricaoAplicacao: string;

  constructor(id: number, nome: string, precoCusto: number, descricaoAplicacao: string) {
      super(id, nome, precoCusto);
      this.descricaoAplicacao = descricaoAplicacao;
  }

  calcularPrecoVenda(): number {
      return this.precoCusto * 1.45; // Acréscimo de 45%
  }

  imprimirInformacoes(): void {
      super.imprimirInformacoes();
      console.log(`Descrição da Aplicação: ${this.descricaoAplicacao}`);
  }
}

class MaterialEscritorio extends Produto {
  private reciclavel: boolean;

  constructor(id: number, nome: string, precoCusto: number, reciclavel: boolean) {
      super(id, nome, precoCusto);
      this.reciclavel = reciclavel;
  }

  calcularPrecoVenda(): number {
      return this.precoCusto * 1.3; // Acréscimo de 30%
  }

  imprimirInformacoes(): void {
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
