import Product from "./Product";

export default class CleaningProduct extends Product{

    private description: string = "";

    public getDescription(): string{
      return this.description;
    }
  
    public setDescription(description:string){
      this.description = description;
    }

    public computeSalePrice(): void{
         super.setSalePrice(super.getCostPrice() * 1.45);
      }


}