'use strict';

let nro1 = +prompt("Anna ensimmäinen numero")
let nro2 = +prompt("Anna toinen numero")
let nro3 = +prompt("Anna kolmas numero")
let nro4 = +prompt("Anna neljäs numero")
let nro5 = +prompt("Anna viides numero")

const nros = []
nros[0] = nro5
nros[1] = nro4
nros[2] = nro3
nros[3] = nro2
nros[4] = nro1

for (let i of nros) {
      console.log(`${i}`);
    }