'use strict';

const vuosi = prompt('Anna vuosiluku.');



const vuosi1 = (vuosi % 4)
const vuosi2 = (vuosi % 400 == 0)
const vuosi3 = (vuosi % 100 == 0)

if (vuosi1==0 && vuosi2==vuosi3) {
    document.querySelector('#target').innerHTML = "Vuosi on karkausvuosi."
} else if (vuosi1!==true && vuosi2==true) {
    document.querySelector('#target').innerHTML = "Vuosi on karkausvuosi."
} else {
    document.querySelector('#target').innerHTML = "Vuosi ei ole karkausvuosi."
}