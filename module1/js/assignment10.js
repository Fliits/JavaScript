'use strict'
const dice = +prompt("Give number of dice")
const wanted = +prompt("Give the target number of which probability to calculate")
const loop = +prompt("Give the amount of loops used to determine probability (more loops gives more accuracy but takes longer to process)")
let correct = 0
let result_total

for (let i = 0; i < loop; i++){
  result_total = 0
  for (let j = 0; j < dice; j++){
    result_total += Math.floor(Math.random() * 10) + 1
  }
  if (result_total===wanted){
    correct++
  }
}

let probability = (correct/loop*100).toFixed(2)
document.querySelector('#target').innerHTML = `Probability to get ${wanted} with ${dice} dice is ${probability}%`