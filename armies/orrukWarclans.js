import { Model } from './model.js'

class Gutrippa extends Model {
  constructor() {
    super()
    this.name = "Gutrippa";
    this.unitSize = 10;
    this.wounds = 2;
    this.save = 5;
    this.bravery = 5;
    this.img = `./images/Gutrippa.png`;
    this.meleeWeapon = {
      name: "Wicked Hakka",
      attacks: 2,
      toHit: 4,
      toWound: 3,
      rend: 0,
      dmg: 1
    }
  }
};

export { Gutrippa }
