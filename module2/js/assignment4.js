'use strict'

const luvut = []

let syote = +prompt("Anna luku")

while (syote !== 0){
    luvut.push(syote)
    syote = +prompt("Anna luku: ")
}

luvut.sort((a,b) => a-b);
for (let i of luvut){
  console.log(i)
}