'use strict'

function calculator() {
  const ops = ['+', '-', '*', '/']
  const input = document.getElementById('calculation').value
  let op = ''
  for (let i of ops){
    if (input.includes(i)){
      op = i
    }
  }
  let split = input.split(op)
  let x = parseInt(split[0])
  let y = parseInt(split[1])

  let result = 0
  switch (op){
    case '+':
      result=x+y
      break
    case '-':
      result=x-y
      break
    case '*':
      result=x*y
      break
    case '/':
      result=x/y
      break
  }
  document.getElementById("result").textContent = result.toString();
}
const start = document.getElementById('start')
start.addEventListener('click', function(evt){
  calculator()
})