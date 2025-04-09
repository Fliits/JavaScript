'use strict';

name = prompt('Please tell me your name.');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const num = getRandomInt(4);

let house = ('house');

if (num == 0) {
  house = 'Ravenclaw'
} else if (num == 1) {
  house = 'Gryffindor'
} else if (num == 2) {
  house = 'Hufflepuff'
} else if (num == 3) {
  house = 'Slytherin'
}

document.querySelector('#target').innerHTML = name + ', your house is: ' + house;