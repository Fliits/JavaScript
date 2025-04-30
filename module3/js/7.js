let img = document.getElementById('target')
let trigger = document.getElementById('trigger')
function change1(evt){
  img.src = 'img/picB.jpg'
}
function change2(evt) {
  img.src = 'img/picA.jpg'
}
trigger.addEventListener('mouseover', change1)
trigger.addEventListener('mouseout', change2)