'use strict';

let amount = +prompt("Anna määrä")
const list = []

for (let i = 0; i<amount; i++){
  let name = prompt(`Anna ${i+1}. nimi`)
  list.push(name)
}

list.sort()

for (let i of list){
  document.querySelector('#target').innerHTML += `<li>${i}</li>`
}