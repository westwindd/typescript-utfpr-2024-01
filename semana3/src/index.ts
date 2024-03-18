class Cachorro {
  private nome: string;
  private peso: number;
  private raca: string;

  constructor(nome: string, peso: number, raca: string) {
      this.nome = nome;
      this.peso = peso;
      this.raca = raca;
  }

  public imprimir(): void {
      console.log(`Nome: ${this.nome}, Peso: ${this.peso}, Raça: ${this.raca}`);
  }
}
const pitbull = new Cachorro("Pitbull", 30, "Pitbull");
const pastor = new Cachorro("Pastor Alemão", 40, "Pastor Alemão");
const viraLatas = new Cachorro("Vira-Lata", 15, "SRD");

pitbull.imprimir();
pastor.imprimir();
viraLatas.imprimir();
