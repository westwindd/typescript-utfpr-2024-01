export default class Product{

  private id: number = 0;
  private name: string = "";
  costPrice: number = 0;
  salePrice: number = 0;


  //respectivos gets e sets

  public getId(): number{
    return this.id;
  }
  public setId(id: number): void{
    this.id = id;
  }

  public getCostPrice(): number{
    return this.costPrice;
  }
  public setCostPrice(costPrice: number): void{
    this.costPrice = costPrice;
  }

  public getName(): string{
    return this.name;
  }
  public setName(name: string): void{
    this.name = name;
  }
  public getSalePrice(): number{
    return this.salePrice;
  }
  public setSalePrice(salePrice: number): void{
    this.salePrice = salePrice;
  }


  public computeSalePrice(): void{}
  

}