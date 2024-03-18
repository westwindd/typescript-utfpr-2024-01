class Cachorro {
    constructor(nome, peso, raca) {
        this.nome = nome;
        this.peso = peso;
        this.raca = raca;
    }
    imprimir() {
        console.log(`Nome: ${this.nome}, Peso: ${this.peso}, Raça: ${this.raca}`);
    }
}
const pitbull = new Cachorro("Pitbull", 30, "Pitbull");
const pastor = new Cachorro("Pastor Alemão", 40, "Pastor Alemão");
const viraLatas = new Cachorro("Vira-Lata", 15, "SRD");
pitbull.imprimir();
pastor.imprimir();
viraLatas.imprimir();
