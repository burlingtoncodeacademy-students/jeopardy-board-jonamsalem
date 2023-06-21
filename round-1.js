import placeholderQuestions from "./scripts/placeholder-questions.js";
let clickedButton
let playerOneScore1 = 0
let playerTwoScore2 = 0
let playerNum = 1
let switchVariable = 1
let qObject
let trys = 0
let question
let guess = document.querySelector("#guess")
let pass = document.querySelector("#pass")
let userInput = document.querySelector(".user-input")
let playerOneScore = document.getElementById("playerOneScore")
let playerTwoScore = document.getElementById("playerTwoScore")
let playerTurn = document.querySelector(".player-turn")
let nextRound = document.getElementById("next-round")
playerTurn.textContent = "Player 1 Turn"
let currentPlayer = playerOneScore
let passedClicked = false
pass.disabled = true
guess.disabled = true
nextRound.disabled = true

let updatedQuestions = placeholderQuestions
let natureQuestions = placeholderQuestions.slice(0,10)

let animalQuestions = placeholderQuestions.slice(10,20)

let computerQuestions = placeholderQuestions.slice(20,30)

let mythologyQuestions = placeholderQuestions.slice(30,40)

let historyQuestions = placeholderQuestions.slice(40,50)

let generalQuestions = placeholderQuestions.slice(50,60)

console.log(placeholderQuestions)

let buttons = document.querySelectorAll("button")



function disableButtons (event){
    buttons.forEach(button=>{
        if (button != event.target) {
            button.disabled = true;}
        })}


 function chooseQuestion(button){
    guess.disabled = false
    pass.disabled = false
    switch (button[0].className){
        case "nature":
             qObject = (natureQuestions[Math.floor(Math.random() * natureQuestions.length)])
             question = qObject.question
             alert(question)
             natureQuestions = natureQuestions.filter(questions => questions != qObject)

             break; 
         case "animals":
             qObject = (animalQuestions[Math.floor(Math.random() * animalQuestions.length)])
             question = qObject.question
             alert(question)
             animalQuestions = animalQuestions.filter(questions => questions != qObject)

             break;
         case "computers":
             qObject = (computerQuestions[Math.floor(Math.random() * computerQuestions.length)])
             question = qObject.question
             alert(question)
             computerQuestions = computerQuestions.filter(questions => questions != qObject)

             break;
         case "mythology":
             qObject = (mythologyQuestions[Math.floor(Math.random() * mythologyQuestions.length)])
             question = qObject.question
             alert(question)
             mythologyQuestions = mythologyQuestions.filter(questions => questions != qObject)

             break;
         case "history":
             qObject = (historyQuestions[Math.floor(Math.random() * history.length)])
             question = qObject.question
             alert(question)
             historyQuestions = historyQuestions.filter(questions => questions != qObject)

             break;
         case "general":
             qObject = (generalQuestions[Math.floor(Math.random() * generalQuestions.length)])
             question = qObject.question
             alert(question)
             generalQuestions = generalQuestions.filter(questions => questions != qObject)
             break;
     } 
     updatedQuestions= updatedQuestions.filter(questions => questions != qObject)
     console.log(updatedQuestions)

    }

function checkAnswer(question){
        if ((passedClicked == true && userInput.value.toLowerCase().trim() != question.answer.toLowerCase().trim()) || trys ==1 && userInput.value.toLowerCase().trim() != question.answer.toLowerCase().trim())  {
            alert("Wrong. Choose another question")
            trys = 0

            passedClicked = false
            buttons.forEach(btn => {
            btn.disabled = false;})
            guess.disabled = true
            pass.disabled = true

            if (switchVariable == 1){
                playerOneScore1 -= Number(clickedButton[0].textContent)
                currentPlayer.textContent = `Player ${playerNum} Score : ${playerOneScore1}`
                userInput.value = ""}
    
                else if (switchVariable == -1){
                    playerTwoScore2 -= Number(clickedButton[0].textContent)
                    currentPlayer.textContent = `Player ${playerNum} Score : ${playerTwoScore2}`
                    userInput.value = ""
                }
        }
        else if (userInput.value.toLowerCase().trim() == question.answer.toLowerCase().trim()){
            trys = 0
            guess.disabled = true
            pass.disabled = true
            passedClicked = false
            alert("Nice, you get another question")
            buttons.forEach(btn => {
            btn.disabled = false;})

            if (switchVariable == 1){
            playerOneScore1 += Number(clickedButton[0].textContent)
            currentPlayer.textContent = `Player ${playerNum} Score : ${playerOneScore1}`
            userInput.value = ""}

            else if (switchVariable == -1){
                playerTwoScore2 += Number(clickedButton[0].textContent)
                currentPlayer.textContent = `Player ${playerNum} Score : ${playerTwoScore2}`
                userInput.value = ""
            }


            if (playerOneScore1 >= 15000 || playerTwoScore2 >= 15000 || updatedQuestions.length == 30){
                alert("You can now move on to round 2")
                buttons.forEach(btn => {
                    btn.disabled = true;})
                nextRound.disabled = false
                
                }
        }
        else{
            alert(`Wrong. Other Player's turn. ${question.question}`)
            guess.disabled = false
            pass.disabled = true
            trys +=1
            if (switchVariable ==1){
                playerOneScore1 -= Number(clickedButton[0].textContent)
                currentPlayer.textContent = `Player ${playerNum} Score : ${playerOneScore1}`
            }
            else if (switchVariable == -1){
                playerTwoScore2 -= Number(clickedButton[0].textContent)
                currentPlayer.textContent = `Player ${playerNum} Score : ${playerTwoScore2}`
            }
            switchVariable *= -1
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
        
            buttons.forEach(btn => {
                btn.disabled = false;})
                    }
            userInput.value = ""

        }
            
             
buttons.forEach(button => {
    button.addEventListener("click", disableButtons)
    button.addEventListener("click", () => {
        button.style.backgroundColor = "black"
        clickedButton = Array.from(buttons).filter(btn => btn == button)
        chooseQuestion(clickedButton)})})


pass.addEventListener("click", event => {
    event.preventDefault()
    passedClicked = true
    pass.disabled = true
    switchVariable = switchVariable * -1
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
            break;}
    alert (`Other player's turn... ${qObject.question}`)
    
})

guess.addEventListener("click", event =>{
    event.preventDefault()
    console.log(passedClicked)
    checkAnswer(qObject)
    console.log(trys, passedClicked)
    })

module.exports =  {natureQuestions,animalQuestions,historyQuestions,mythologyQuestions,generalQuestions ,computerQuestions, updatedQuestions, playerOneScore1, playerTwoScore2, switchVariable, playerNum, currentPlayer};
