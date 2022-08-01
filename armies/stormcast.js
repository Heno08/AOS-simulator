import { diceRoll, hitting, wounding, damage } from '../combat/combat.js'

let stormcastVindictor = {
  name: "Stormcast Vindictor",
  unitSize: 5,
  wounds: 2,
  save: 3,
  bravery: 7,
  img: `./images/SC-Vindictor.png`,
  sayName: function() {return `I am a ${this.name}!`},
  attack: function(opponent) {
    console.log('Stormcast is attacking!');
    let attackRoll = diceRoll(stormcastVindictor.meleeWeapon.attacks);
    console.log(attackRoll);
    let numHits = hitting(attackRoll, stormcastVindictor);
    let woundRoll = diceRoll(numHits);
    console.log(woundRoll);
    let numwounds = wounding(woundRoll, stormcastVindictor);
    damage(numwounds, stormcastVindictor, opponent)
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

export { stormcastVindictor }
