import placeholderQuestions from "./scripts/placeholder-questions.js";





let natureQuestions = placeholderQuestions.slice(0,10)

let animalQuestions = placeholderQuestions.slice(10,20)

let computerQuestions = placeholderQuestions.slice(20,30)

let mythologyQuestions = placeholderQuestions.slice(30,40)

let historyQuestions = placeholderQuestions.slice(40,50)

let generalQuestions = placeholderQuestions.slice(50,60)


let buttons = document.querySelectorAll("button")
 let clickedButton
 let playerOneScore1 = 0
 let playerTwoScore2 = 0 
let guess = document.querySelector("#guess")
let pass = document.querySelector("#pass")
let userInput = document.querySelector(".user-input")
let playerOneScore = document.getElementById("playerOneScore")
let playerTwoScore = document.getElementById("playerTwoScore")
let currentPlayer = playerOneScore
let playerNum = 1
let switchVariable = 1

let playerTurn = document.querySelector(".player-turn")
playerTurn.textContent = "Player 1 Turn"
guess.disabled = true
guess.style.color = "gray"
pass.disabled = true
pass.style.color = "gray"

function buttonClicked(){
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.style.backgroundColor = "black"
            button.disabled = true
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
     checkAnswer(qObject, playerOneScore)
    }

 function checkAnswer(question, user){

    guess.addEventListener("click", event =>{
    event.preventDefault()
    console.log(question.answer)
    if (userInput.value == question.answer){
     
        if (switchVariable == 1){
        playerOneScore1 += Number(clickedButton[0].textContent)
        currentPlayer.textContent = `Player ${playerNum} Score : ${playerOneScore1}`}

        else if (switchVariable == -1){
            playerTwoScore2 += Number(clickedButton[0].textContent)
            currentPlayer.textContent = `Player ${playerNum} Score : ${playerTwoScore2}`
        }
    }
    else{
        alert("Wrong. Other player's turn")
        switchVariable = switchVariable * -1
        console.log(switchVariable)
        if (switchVariable == -1){
        playerNum = 2
        currentPlayer = playerTwoScore}
        else if(switchVariable == 1) {
            playerNum = 1
            currentPlayer = playerOneScore

    
    }
}
    question = null 

 })
 }


buttonClicked()