import Cao from "./Cao";

export default class Cachorrinho extends Cao {
  constructor(name: string) {
    super(name);
  }

  latir() {
    console.log("Puppy is barking");
  }
}
