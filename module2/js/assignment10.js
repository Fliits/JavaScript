'use strict'

const cand = []

let cand_num = prompt("Give number of candidates")
for (let i=0; i<cand_num;i++){
  let cand_name = prompt(`Give name of candidate number ${i+1}`)
  let vote_number = 0
  const candidate = {
    Name: cand_name,
    VoteNumber: vote_number}
  cand.push(candidate)
}
const voter = +prompt("Give number of voters")
for (let i=0; i<voter;i++){
  let vote = prompt(`Give candidate for voter number ${i+1}`)
  for (let candidate of cand){
    if (candidate.Name==vote){
      candidate.VoteNumber += 1
    }
  }
}
cand.sort(function(a, b){return b.VoteNumber - a.VoteNumber})
console.log(`The winner is ${cand[0].Name}`)
for (let i of cand){
  console.log(i)
}