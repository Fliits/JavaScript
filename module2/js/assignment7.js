'use strict'

const max = 21

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1
}
const throws = []
let die = +getRandomInt(max)
throws.push(die)
while (die !== max) {
  die = +getRandomInt(max)
  throws.push(die)
}
for (let i of throws){
    document.querySelector('#target').innerHTML += `<li>${i}</li>`
}