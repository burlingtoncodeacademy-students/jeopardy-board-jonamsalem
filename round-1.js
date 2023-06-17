import placeholderQuestions from "./scripts/placeholder-questions.js";





let natureQuestions = placeholderQuestions.slice(0,10)

let animalQuestions = placeholderQuestions.slice(10,20)

let computerQuestions = placeholderQuestions.slice(20,30)

let mythologyQuestions = placeholderQuestions.slice(30,40)

let historyQuestions = placeholderQuestions.slice(40,50)

let generalQuestions = placeholderQuestions.slice(50,60)


let buttons = document.querySelectorAll("button")
 let clickedButton


let guess = document.querySelector("#guess")
let pass = document.querySelector("#pass")
let userInput = document.querySelector(".user-input")
guess.disabled = true
pass.disabled = true

let playerTurn = document.querySelector(".player-turn")
playerTurn.textContent = "Player 1 Turn"


  function buttonClicked(){
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            clickedButton = Array.from(buttons).filter(btn => btn == button)
            chooseQuestion(clickedButton)

        
    
        })})
    }

let qObject
let question
 function chooseQuestion(button){

    switch (clickedButton[0].className){
        case "nature":
             qObject = (natureQuestions[Math.floor(Math.random() * 10)])
             question = qObject.question
             alert(question)
             break; 
         case "animals":
             qObject = (animalQuestions[Math.floor(Math.random() * 10)])
             question = qObject.question
             alert(question)
             break;
         case "computers":
             qObject = (computerQuestions[Math.floor(Math.random() * 10)])
             question = qObject.question
             alert(question)
             break;
         case "mythology":
             qObject = (mythologyQuestions[Math.floor(Math.random() * 10)])
             question = qObject.question
             alert(question)
             break;
         case "history":
             qObject = (historyQuestions[Math.floor(Math.random() * 10)])
             question = qObject.question
             alert(question)
             break;
         case "general":
             qObject = (generalQuestions[Math.floor(Math.random() * 10)])
             question = qObject.question
             alert(question)
             break;
     } 
     guess.disabled = false
     pass.disabled = false
     checkAnswer(qObject)
    }

 function checkAnswer(question){
    guess.addEventListener("click", event =>{
    event.preventDefault()
    if (userInput.value == question.answer){
    console.log("yes")}
    else{
        console.log("no")
    }
    
})}

buttonClicked()