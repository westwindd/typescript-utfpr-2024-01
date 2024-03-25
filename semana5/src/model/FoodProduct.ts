export default class FoodProduct{

  private expirationDate: number = 0;

  public getExpirationDate(): number{
    return this.expirationDate;
  }

  public setExpirationDate(expiratioDate:number){
    this.expirationDate = expiratioDate;
  }

}