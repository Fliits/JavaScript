'use strict'

let form = document.getElementById('target')
const div = document.getElementById('results')
form.addEventListener('submit', async function(evt){
  evt.preventDefault()
  const value_from_input = document.querySelector('input[name=q]').value
  div.innerHTML = ''
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`)
    const jsonData = await response.json()
    for (let i of jsonData){
      console.log(i)
    }
    for (let i of jsonData){
      const art = document.createElement('article')
      const title = document.createElement('h2')
      title.textContent = i['show']['name']
      art.appendChild(title)
      const link = document.createElement('a')
      link.text = i['show']['name']
      link.href = i['show']['url']
      link.setAttribute('target', '_blank')
      art.appendChild(link)
      const img = document.createElement('img')
      img.src = i.show.image?.medium
      img.alt = i['show']['name']
      art.appendChild(img)
      const sum = document.createElement('div')
      sum.innerHTML = i['show']['summary']
      art.appendChild(sum)
      div.appendChild(art)
    }
  } catch (error) {
    console.log(error.message)
  }
})