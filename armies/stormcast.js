import { diceRoll, hitting, wounding, damage } from '../combat/combat.js';
import { Model } from './model.js'

function StormcastVindictor() { }

StormcastVindictor.prototype = Object.create(Model.prototype);
StormcastVindictor.prototype.constructor = StormcastVindictor;
 StormcastVindictor.prototype = {
  name: "Stormcast Vindictor",
  unitSize: 5,
  wounds: 2,
  save: 3,
  bravery: 7,
  img: `./images/SC-Vindictor.png`,
  attack(opponent) {
    this.sayName();
    console.log('Stormcast is attacking!');
    let attackRoll = diceRoll(this.meleeWeapon.attacks);
    console.log(attackRoll);
    let numHits = hitting(attackRoll, this);
    let woundRoll = diceRoll(numHits);
    console.log(woundRoll);
    let numwounds = wounding(woundRoll, this);
    damage(numwounds, this, opponent)
  },
  meleeWeapon: {
    name: "Stormspear",
    attacks: 2,
    toHit: 3,
    toWound: 3,
    rend: 1,
    dmg: 1
  }
};

export { StormcastVindictor }
