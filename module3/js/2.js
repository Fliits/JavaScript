'use strict'

let list = document.querySelector('#target')
const items = ['First item', 'Second item', 'Third item']

for (let i of items) {
  const n = document.createElement('li')
  n.textContent = i.toString()
  list.appendChild(n)
}
let item2 = document.getElementsByTagName('li')[1]
item2.setAttribute('class','my-item')