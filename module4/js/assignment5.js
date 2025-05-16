'use strict'

async function joke(){
  try {
    let response = await fetch ('https://api.chucknorris.io/jokes/random')
    let data = await response.json()
    console.log(data['value'])
  } catch (error){
    console.log(error)
  }
}

joke();