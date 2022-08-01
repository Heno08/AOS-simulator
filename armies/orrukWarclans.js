import { diceRoll, hitting, wounding, damage } from '../combat/combat.js'

let gutrippa = {
  name: "Gutrippa",
  unitSize: 10,
  wounds: 2,
  save: 5,
  bravery: 5,
  img: `./images/Gutrippa.png`,
  sayName: function() {return `I am a ${this.name}!`},
  attack: function(opponent) {
    console.log('Orruk is attacking!')
    let attackRoll = diceRoll(gutrippa.meleeWeapon.attacks);
    console.log(attackRoll);
    let numHits = hitting(attackRoll, gutrippa);
    let woundRoll = diceRoll(numHits);
    console.log(woundRoll);
    let numwounds = wounding(woundRoll, gutrippa);
    damage(numwounds, gutrippa, opponent);
  },
  meleeWeapon: {
    name: "Wicked Stikka",
    attacks: 2,
    toHit: 4,
    toWound: 4,
    rend: 0,
    dmg: 1
  }
};

export { gutrippa }
