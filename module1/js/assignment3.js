'use strict';

let num1 = +prompt('enter number one:');
let num2 = +prompt('enter number two:');
let num3 = +prompt('enter number three:');

const sum = num1 + num2 + num3;
const mult = num1 * num2 * num3;
const av = sum / 3;

document.querySelector('#target1').innerHTML = 'The sum of the numbers was: ' + sum;
document.querySelector('#target2').innerHTML = 'The product of the numbers was: ' + mult;
document.querySelector('#target3').innerHTML = 'The average of the numbers was: ' + av;