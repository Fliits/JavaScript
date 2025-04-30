'use strict'

const source = document.getElementById('source')
const fn = document.querySelector('input[name=firstname]')
const ln = document.querySelector('input[name=lastname]')
const p = document.getElementById(('target'))

source.addEventListener('submit', function(evt) {
  evt.preventDefault()
  p.innerText = `Your name is ${fn.value} ${ln.value}`
})