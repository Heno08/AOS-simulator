import { Model } from './model.js'


 class StormcastVindictor extends Model {
  constructor() {
    super()
    this.name = "Stormcast Vindictor";
    this.unitSize = 5;
    this.wounds = 2;
    this.save = 3;
    this.bravery = 7;
    this.img = `./images/SC-Vindictor.png`;
    this.meleeWeapon = {
      name: "Stormspear",
      attacks: 2,
      toHit: 3,
      toWound: 3,
      rend: 1,
      dmg: 1
    }
  }
};

export { StormcastVindictor }
