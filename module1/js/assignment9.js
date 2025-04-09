'use strict';

let luku = +prompt("Anna alkuluku")

if (luku==1){
  document.querySelector('#target').innerHTML = "LUKU ON ALKULUKU"
} else if (luku==2){
  document.querySelector('#target').innerHTML = "LUKU ON ALKULUKU"
} else {
  for (let i = 2; i < luku; i++) {
    console.log(luku % i);
    if (luku % i == 0) {
      document.querySelector('#target').innerHTML = "LUKU EI OLE ALKULUKU"
      break
    } else {
      document.querySelector('#target').innerHTML = "LUKU ON ALKULUKU"
    }
  }
}