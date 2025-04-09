'use strict'

const dogs = []

for (let i=0; i < 6; i++){
  let name = prompt("Anna koiran nimi")
  dogs.push(name)
}

dogs.sort()
dogs.reverse()

for (let i of dogs){
  document.querySelector('#target').innerHTML += `<li>${i}</li>`
}