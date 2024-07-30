let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
    
}
function newGame(){
    window.location.reload()
}
function compareNumbers(){
   const userNumber = Number(document.getElementById('inputBox').value)
   userNumbers.push(' ' + userNumber)

   document.getElementById('guesses').innerHTML = userNumbers

   if (userNumber >= 1 && userNumber <= 100) {
     if(attempts < maxGuesses){
      if (userNumber > computerNumber){
       document.getElementById('textOutput').innerHTML = 'Your Number is too high'
       document.getElementById('inputBox').value = ''
       attempts++
       document.getElementById('attempts').innerHTML = attempts
       }
        else if(userNumber < computerNumber){
       document.getElementById('textOutput').innerHTML = 'Your Number is too low'
       document.getElementById('inputBox').value = ''
       attempts++
       document.getElementById('attempts').innerHTML = attempts 
       }
        else {
       
       document.getElementById('textOutput').innerHTML = 'Congratulations!!! You got it'
       document.getElementById('inputBox').value = ''
       attempts++
       document.getElementById('attempts').innerHTML = attempts
       document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
       }
      }
      else {
       document.getElementById('textOutput').innerHTML = 'You lose! The number was: ' + computerNumber
       document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')  
     }
   }
   else {
    document.getElementById('textOutput').innerHTML = 'Your number must be between 1 and 100, try again'
    document.getElementById('inputBox').value = ''
   }
   
   
}