'use strict';
const heitot = +prompt('Anna noppien heittojen määrä.')

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1
}

let jäljellä = 0
let tulos = 0

while (jäljellä < heitot) {
  let noppa = getRandomInt(6)
  tulos += noppa
  jäljellä++
}

document.querySelector('#target').innerHTML = "Lukujen summa on " + tulos