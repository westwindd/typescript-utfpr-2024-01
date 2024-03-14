class Pessoa {
  private _nome: string;
  private _sexo: 'M' | 'F';
  private _idade: number;
  private _altura: number; // Em metros

  constructor(nome: string, sexo: 'M' | 'F', idade: number, altura: number) {
      this._nome = nome;
      this._sexo = sexo;
      this._idade = idade;
      this._altura = altura;
  }

  get nome(): string {
      return this._nome;
  }

  set nome(value: string) {
      this._nome = value;
  }

  get sexo(): 'M' | 'F' {
      return this._sexo;
  }

  set sexo(value: 'M' | 'F') {
      this._sexo = value;
  }

  get idade(): number {
      return this._idade;
  }

  set idade(value: number) {
      this._idade = value;
  }

  get altura(): number {
      return this._altura;
  }

  set altura(value: number) {
      this._altura = value;
  }
}
class Setor {
  private _nome: string;
  private _descricao: string;

  constructor(nome: string, descricao: string) {
    this._nome = nome;
    this._descricao = descricao;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(value: string) {
    this._descricao = value;
  }
}

class Funcionario extends Pessoa {
  private _peso: number;
  private _setor: Setor; 
  private _funcao: string;

  constructor(nome: string, sexo: 'M' | 'F', idade: number, altura: number, peso: number, setor: Setor, funcao: string) {
      super(nome, sexo, idade, altura);
      this._peso = peso;
      this._setor = setor;
      this._funcao = funcao;
  }

  get setor(): Setor {
      return this._setor;
  }

  set setor(value: Setor) {
      this._setor = value;
  }
    get peso(): number {
        return this._peso;
    }

    set peso(value: number) {
        this._peso = value;
    }


    get funcao(): string {
        return this._funcao;
    }

    set funcao(value: string) {
        this._funcao = value;
    }
}
class CalculoIMC {
  static calcularIMC(peso: number, altura: number): IMCResultado {
    const imc = peso / (altura * altura);
    let classificacao = '';
    let obesidadeGrau = 0;

    if (imc < 18.5) {
      classificacao = 'MAGREZA';
      obesidadeGrau = 0;
    } else if (imc >= 18.5 && imc <= 24.9) {
      classificacao = 'NORMAL';
      obesidadeGrau = 0;
    } else if (imc >= 25 && imc <= 29.9) {
      classificacao = 'SOBREPESO';
      obesidadeGrau = 1;
    } else if (imc >= 30 && imc <= 39.9) {
      classificacao = 'OBESIDADE';
      obesidadeGrau = 2;
    } else if (imc > 40) {
      classificacao = 'OBESIDADE GRAVE';
      obesidadeGrau = 3;
    }

    return { imc, classificacao, obesidadeGrau };
  }
}

  interface IMCResultado {
    imc: number;
    classificacao: string;
    obesidadeGrau: number;
  }
  
  class SistemaIMC {
    funcionarios: Funcionario[] = [];
  
    cadastrarFuncionario(funcionario: Funcionario) {
      this.funcionarios.push(funcionario);
      const resultadoIMC = this.calcularIMC(funcionario.peso, funcionario.altura);
      console.log(`IMC de ${funcionario.nome}: ${resultadoIMC.imc}, Classificação: ${resultadoIMC.classificacao}, Obesidade (Grau): ${resultadoIMC.obesidadeGrau}`);
    }
  
    calcularIMC(peso: number, altura: number): IMCResultado {
      const imc = peso / (altura * altura);
      let classificacao = '';
      let obesidadeGrau = 0;
  
      if (imc < 18.5) {
        classificacao = 'MAGREZA';
        obesidadeGrau = 0;
      } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'NORMAL';
        obesidadeGrau = 0;
      } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'SOBREPESO';
        obesidadeGrau = 1;
      } else if (imc >= 30 && imc <= 39.9) {
        classificacao = 'OBESIDADE';
        obesidadeGrau = 2;
      } else if (imc > 40) {
        classificacao = 'OBESIDADE GRAVE';
        obesidadeGrau = 3;
      }
  
      return { imc, classificacao, obesidadeGrau };
    }
  
    mediaIMCPorSexo(sexo: 'M' | 'F'): number {
      const funcionariosFiltrados = this.funcionarios.filter(f => f.sexo === sexo);
      const totalIMC = funcionariosFiltrados.reduce((acc, curr) => acc + this.calcularIMC(curr.peso, curr.altura).imc, 0);
      return totalIMC / funcionariosFiltrados.length;
    }
  }
  
  const sistema = new SistemaIMC();
  const setorTI = new Setor("TI", "Tecnologia da Informação");
  const setorRH = new Setor("RH", "Recursos Humanos");
  
  const funcionario1 = new Funcionario("João Silva", "M", 30, 1.75, 80, setorTI, "Desenvolvedor");
  const funcionario2 = new Funcionario("Maria Souza", "F", 28, 1.65, 60, setorRH, "Analista de Recursos Humanos");
  
  sistema.cadastrarFuncionario(funcionario1);
  sistema.cadastrarFuncionario(funcionario2);
  
  console.log(`Média do IMC dos homens: ${sistema.mediaIMCPorSexo('M')}`);
  console.log(`Média do IMC das mulheres: ${sistema.mediaIMCPorSexo('F')}`);
  