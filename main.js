import { StormcastVindictor } from "./armies/stormcast.js";
import { Gutrippa } from "./armies/orrukWarclans.js";

const fimgBox = document.querySelector('#fighterimage');

const oimgBox = document.querySelector('#opponentimage')

const button = document.querySelector('#attack-btn');

let pickFighter = document.querySelector('#fighter-selector');

const opponentName = document.querySelector('#opponentname');

// let pickOpponent = document.querySelector('#opponent-selector');

pickFighter.addEventListener('change', function() {
  if (pickFighter.value === 'stormcastVindictor') {
    opponentName.innerText = 'Opponent: ';
    let pickedFighter = new StormcastVindictor();
    let opponent = new Gutrippa();
    fimgBox.src=`${pickedFighter.img}`;
    oimgBox.src=`${opponent.img}`;
    opponentName.innerText = "Opponent: Gutrippa";
    console.log(pickedFighter);
    button.addEventListener('click', function() {
      pickedFighter.attack(opponent);
    })
  } else if (pickFighter.value === 'gutrippa') {
    opponentName.innerText = 'Opponent: ';
    let pickedFighter = new Gutrippa();
    let opponent = new StormcastVindictor();
    fimgBox.src=`${pickedFighter .img}`;
    oimgBox.src=`${opponent.img}`;
    opponentName.innerText = "Opponent: Stormcast Vindictor";
    button.addEventListener('click', function() {
      pickedFighter.attack(opponent)
    })
  } else {
    alert('No Fighter Chosen!')
    fimgBox.src=` `
  }
});

// pickOpponent.addEventListener('change', function() {
//   if (pickOpponent.value === 'stormcastVindictor') {
//     oimgBox.src=`${stormcastVindictor.img}`;
//   } else if (pickOpponent.value === 'gutrippa') {
//     oimgBox.src=`${gutrippa.img}`;
//   } else {
//     alert('No Fighter Chosen!')
//     oimgBox.src=` `
//   }
// });
