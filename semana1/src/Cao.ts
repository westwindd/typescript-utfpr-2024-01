import Animal from "./Animal";

export default class Cao extends Animal {
  constructor(name: string) {
    super(name);
  }

  public corre() {
    console.log("Dog named " + super.getName() + " is running");
  }
}
