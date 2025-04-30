'use strict'

function calculator() {
  const x = parseInt(document.getElementById("num1").value)
  const y = parseInt(document.getElementById("num2").value)
  const op = document.getElementById('operation').value
  let result = 0

  switch (op){
    case 'add':
      result=x+y
      break
    case 'sub':
      result=x-y
      break
    case 'multi':
      result=x*y
      break
    case 'div':
      result=x/y
      break
  }
  document.getElementById("result").textContent = result.toString();
}
const start = document.getElementById('start')
start.addEventListener('click', function(evt){
  calculator()
})

