'use strict'

const array1 = [4, 7, 2]

function even(array){
  const newarray = []
  for (let i of array){
    if (i % 2 == 0){
      newarray.push(i)
    }
  } return newarray
}

const array2 = even(array1)

console.log(array1)
console.log(array2)