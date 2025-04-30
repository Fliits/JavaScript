'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector('#target')
let n= ''
for (let i of names){
  n += `<li>${i}</li>`
}
target.innerHTML = n