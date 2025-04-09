'use strict'

const luvut = []
let syote = +prompt("Anna luku")
luvut.push(syote)

for (let i of luvut){
  syote = +prompt("Anna luku")
  if(luvut.includes(syote)){
    alert("Luku on jo annettu")
    luvut.sort((a,b) => a-b);
    for (let i of luvut){
      console.log(i)
    } break
  }
  luvut.push(syote)
}

