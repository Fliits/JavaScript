'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
let list = document.querySelector('#target')
for (let i of students) {
  const n = document.createElement('option')
  n.textContent = i.name.toString()
  list.appendChild(n).setAttribute('value', `${i.id}`)
}