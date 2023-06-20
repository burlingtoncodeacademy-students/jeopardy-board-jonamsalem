import placeholderQuestions from "./scripts/placeholder-questions.js";
let clickedButton
let playerOneScore1 = 0
let playerTwoScore2 = 0
let playerNum = 1
let switchVariable = 1
let qObject
let question

let guess = document.querySelector("#guess")
let pass = document.querySelector("#pass")
let userInput = document.querySelector(".user-input")
let playerOneScore = document.getElementById("playerOneScore")
let playerTwoScore = document.getElementById("playerTwoScore")
let playerTurn = document.querySelector(".player-turn")
playerTurn.textContent = "Player 1 Turn"
let currentPlayer = playerOneScore


let natureQuestions = placeholderQuestions.slice(0,10)

let animalQuestions = placeholderQuestions.slice(10,20)

let computerQuestions = placeholderQuestions.slice(20,30)

let mythologyQuestions = placeholderQuestions.slice(30,40)

let historyQuestions = placeholderQuestions.slice(40,50)

let generalQuestions = placeholderQuestions.slice(50,60)

let buttons = document.querySelectorAll("button")



function disableButtons (event){
    buttons.forEach(button=>{
        if (button != event.target) {
            button.disabled = true;}
        })}

function buttonClicked(){
    
    buttons.forEach(button => {
        button.addEventListener("click", disableButtons)
        button.addEventListener("click", () => {
            button.style.backgroundColor = "black"
            clickedButton = Array.from(buttons).filter(btn => btn == button)
            chooseQuestion(clickedButton)})})}


 function chooseQuestion(button){
    switch (button[0].className){
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
 
     checkAnswer(qObject, playerOneScore)
    }

function checkAnswer(question){
    let trys = 0
    switch(switchVariable){
        case -1:
            playerTurn.textContent = "Player 2 Turn"
            playerNum = 2
            currentPlayer = playerTwoScore
            break;
        case 1:
            playerTurn.textContent = "Player 1 Turn"
            playerNum = 1
            currentPlayer = playerOneScore
            break;
    }

    pass.addEventListener("click", event => {
        event.preventDefault()
        switchVariable = switchVariable * -1
        alert(`Other player's turn... ${question.question}`)
    })
    guess.addEventListener("click", event =>{
        buttons.forEach(btn => {
            btn.disabled = false;})
        event.preventDefault()
        console.log(question.answer)
        if (userInput.value.toLowerCase().trim() == question.answer.toLowerCase().trim()){
            alert("Nice, you get another question")

            if (switchVariable == 1){
            playerOneScore1 += Number(clickedButton[0].textContent)
            currentPlayer.textContent = `Player ${playerNum} Score : ${playerOneScore1}`
            userInput.value = ""}

            else if (switchVariable == -1){
                userInput.value = ""
                playerTwoScore2 += Number(clickedButton[0].textContent)
                currentPlayer.textContent = `Player ${playerNum} Score : ${playerTwoScore2}`
            }

            if (playerOneScore1 >= 1500 || playerTwoScore2 >= 1500){
                alert("You are moving on to round 2")
                setTimeout(() => {
                document.location.href = "round-2.html"
                }, 3000);
                }
        }
        else{
            alert(`Wrong. Other Player's turn. ${question.question}`)
            userInput.value = ""
            switchVariable = switchVariable * -1
            checkAnswer(question)

            }
            question = null 
        })


}





buttonClicked()


//  pass doesnt work
// cnat diable all buttons