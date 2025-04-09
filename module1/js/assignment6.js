'use strict';

let ses = confirm("Should I calculate the square root?");

if (ses==true) {
  let num = +prompt("Give a number.")
  let calc = +Math.sqrt(num)
  if (num <= 0) {
    document.querySelector('#target').innerHTML = 'The square root of a negative number is not defined.'
  } else {
    document.querySelector('#target').innerHTML = 'The square root is ' + calc + "."
  }
} else if (ses==false) {
  document.querySelector('#target').innerHTML = 'The square root is not calculated.'
}