'use strict'

let form = document.getElementById('target')
form.addEventListener('submit', async function(evt){
  evt.preventDefault()
  const value_from_input = document.querySelector('input[name=q]').value
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`)
    const jsonData = await response.json()
    for (let i of jsonData){
      console.log(i)
    }
  } catch (error) {
    console.log(error.message)
  }
})