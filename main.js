import { stormcastVindictor } from "./armies/stormcast.js";
import { gutrippa } from "./armies/orrukWarclans.js";

const fimgBox = document.querySelector('#fighterimage');

const oimgBox = document.querySelector('#opponentimage')

const button = document.querySelector('#attack-btn');

let pickFighter = document.querySelector('#fighter-selector');

const opponentName = document.querySelector('#opponentname');

// let pickOpponent = document.querySelector('#opponent-selector');

pickFighter.addEventListener('change', function() {
  if (pickFighter.value === 'stormcastVindictor') {
    opponentName.innerText = 'Opponent: ';
    fimgBox.src=`${stormcastVindictor.img}`;
    oimgBox.src=`${gutrippa.img}`;
    opponentName.innerText = "Opponent: Gutrippa";
    let pickedFighter = stormcastVindictor;
    let opponent = gutrippa;
    console.log(stormcastVindictor);
    button.addEventListener('click', function() {
      pickedFighter.attack(opponent);
    })
  } else if (pickFighter.value === 'gutrippa') {
    opponentName.innerText = 'Opponent: ';
    fimgBox.src=`${gutrippa.img}`;
    oimgBox.src=`${stormcastVindictor.img}`;
    opponentName.innerText = "Opponent: Stormcast Vindictor";
    let pickedFighter = gutrippa;
    let opponent = stormcastVindictor;
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
