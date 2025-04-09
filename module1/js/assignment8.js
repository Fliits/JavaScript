'use strict'

let luku1 = parseInt(prompt('Anna vuosiluku'))
let luku2 = parseInt(prompt('Anna toinen vuosiluku'))

let lasku = +luku1

while (lasku <= luku2) {
  if (lasku % 100 === 0 && lasku % 400 === 0) {
      document.querySelector('#target').innerHTML += `<li>${lasku}</li>`
      lasku++
  } else if (lasku % 4 === 0 && lasku % 100 !== 0) {
    document.querySelector('#target').innerHTML += `<li>${lasku}</li>`
    lasku++
  }  else {
      lasku++
    }
}