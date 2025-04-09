'use strict'

const array = ['Johny','Deedee','Joey','Marky']

function concat(array){
  let fullarray = ''
  for (let i of array){
    fullarray += i
  } return fullarray
}

const names = concat(array)

document.querySelector('#target').innerHTML = names