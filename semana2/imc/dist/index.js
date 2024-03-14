class Pessoa {
    constructor(nome, sexo, idade, altura) {
        this._nome = nome;
        this._sexo = sexo;
        this._idade = idade;
        this._altura = altura;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get idade() {
        return this._idade;
    }
    set idade(value) {
        this._idade = value;
    }
    get altura() {
        return this._altura;
    }
    set altura(value) {
        this._altura = value;
    }
}
class Setor {
    constructor(nome, descricao) {
        this._nome = nome;
        this._descricao = descricao;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        this._descricao = value;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, sexo, idade, altura, peso, setor, funcao) {
        super(nome, sexo, idade, altura);
        this._peso = peso;
        this._setor = setor;
        this._funcao = funcao;
    }
    // Getter e Setter para _setor agora manipulam um objeto Setor
    get setor() {
        return this._setor;
    }
    set setor(value) {
        this._setor = value;
    }
    get peso() {
        return this._peso;
    }
    set peso(value) {
        this._peso = value;
    }
    get funcao() {
        return this._funcao;
    }
    set funcao(value) {
        this._funcao = value;
    }
}
class CalculoIMC {
    static calcularIMC(peso, altura) {
        const imc = peso / (altura * altura);
        let classificacao = '';
        let obesidadeGrau = 0;
        if (imc < 18.5) {
            classificacao = 'MAGREZA';
            obesidadeGrau = 0;
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = 'NORMAL';
            obesidadeGrau = 0;
        }
        else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'SOBREPESO';
            obesidadeGrau = 1;
        }
        else if (imc >= 30 && imc <= 39.9) {
            classificacao = 'OBESIDADE';
            obesidadeGrau = 2;
        }
        else if (imc > 40) {
            classificacao = 'OBESIDADE GRAVE';
            obesidadeGrau = 3;
        }
        return { imc, classificacao, obesidadeGrau };
    }
}
class SistemaIMC {
    constructor() {
        this.funcionarios = [];
    }
    cadastrarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
        const resultadoIMC = this.calcularIMC(funcionario.peso, funcionario.altura);
        console.log(`IMC de ${funcionario.nome}: ${resultadoIMC.imc}, Classificação: ${resultadoIMC.classificacao}, Obesidade (Grau): ${resultadoIMC.obesidadeGrau}`);
    }
    calcularIMC(peso, altura) {
        const imc = peso / (altura * altura);
        let classificacao = '';
        let obesidadeGrau = 0;
        if (imc < 18.5) {
            classificacao = 'MAGREZA';
            obesidadeGrau = 0;
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = 'NORMAL';
            obesidadeGrau = 0;
        }
        else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'SOBREPESO';
            obesidadeGrau = 1;
        }
        else if (imc >= 30 && imc <= 39.9) {
            classificacao = 'OBESIDADE';
            obesidadeGrau = 2;
        }
        else if (imc > 40) {
            classificacao = 'OBESIDADE GRAVE';
            obesidadeGrau = 3;
        }
        return { imc, classificacao, obesidadeGrau };
    }
    mediaIMCPorSexo(sexo) {
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
