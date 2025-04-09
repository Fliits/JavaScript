'use strict';

function getRandomInt() {
  return Math.floor(Math.random() * 6) + 1
}
const throws = []
let die = +getRandomInt()
throws.push(die)
while (die !== 6) {
  die = +getRandomInt()
  throws.push(die)
}
for (let i of throws){
    document.querySelector('#target').innerHTML += `<li>${i}</li>`
}
