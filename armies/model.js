import { diceRoll, hitting, wounding, damage } from '../combat/combat.js';

class Model {
  attack(opponent) {
    console.log(`${this.name} is attacking`);
    let attackRoll = diceRoll(this.meleeWeapon.attacks);
    console.log(attackRoll);
    let numHits = hitting(attackRoll, this);
    let woundRoll = diceRoll(numHits);
    console.log(woundRoll);
    let numwounds = wounding(woundRoll, this);
    damage(numwounds, this, opponent);
  }
}

export { Model }
