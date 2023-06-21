import placeholderQuestions from "./scripts/placeholder-questions.js";
let clickedButton
let playerOneScore1 = 0
let playerTwoScore2 = 0
let switchVariable = 1
let qObject
let trys = 0
let question
let guess = document.querySelector("#guess")
let pass = document.querySelector("#pass")
let userInput = document.querySelector(".user-input")
let playerOne = document.getElementById("playerOneScore")
let playerTwo = document.getElementById("playerTwoScore")
let playerTurn = document.querySelector(".player-turn")
let nextRound = document.getElementById("next-round")
let buttons = document.querySelectorAll("button")

playerTurn.textContent = "Player 1 Turn"
let currentPlayer = playerOneScore
let passedClicked = false
pass.disabled = true
guess.disabled = true
nextRound.style.pointerEvents= "none"




let updatedQuestions = placeholderQuestions

let natureQuestions = placeholderQuestions.slice(0,5)

let animalQuestions = placeholderQuestions.slice(10,15)

let computerQuestions = placeholderQuestions.slice(20,25)

let mythologyQuestions = placeholderQuestions.slice(30,35)

let historyQuestions = placeholderQuestions.slice(40, 45)

let generalQuestions = placeholderQuestions.slice(50,55)
console.log(natureQuestions)



function disableButtons (event){
    buttons.forEach(button=>{
            button.disabled = true;}
        )}


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


    }

function checkAnswer(question){
        if ((passedClicked == true && userInput.value.toLowerCase().trim() != question.answer.toLowerCase()) || trys ==1 && userInput.value.toLowerCase().trim() != question.answer.toLowerCase()){
            alert("Wrong. Choose another question")
            trys = 0
            passedClicked = false
            buttons.forEach(btn => {
            btn.disabled = false;})
            guess.disabled = true
            pass.disabled = true

            if (switchVariable == 1){
                playerOneScore1 -= Number(clickedButton[0].textContent)
                currentPlayer.textContent = `Player 1 Score : ${playerOneScore1}`
                }
    
                else if (switchVariable == -1){
                    playerTwoScore2 -= Number(clickedButton[0].textContent)
                    currentPlayer.textContent = `Player 2 Score : ${playerTwoScore2}`
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
            currentPlayer.textContent = `Player 1 Score : ${playerOneScore1}`
            }

            else if (switchVariable == -1){
                playerTwoScore2 += Number(clickedButton[0].textContent)
                currentPlayer.textContent = `Player 2 Score : ${playerTwoScore2}`
            }


            if (playerOneScore1 >=500 || playerTwoScore2 >= 500 || updatedQuestions.length == 30){
                alert("You must now move on to round 2. Please click the 'next round' button.")
                buttons.forEach(btn => {
                    btn.disabled = true;})
                guess.disabled = true
                pass.disabled = true
                nextRound.style.pointerEvents = "auto"
                
                
                }
        }
        else{
            alert(`Wrong. Other Player's turn. ${question.question}`)
            guess.disabled = false
            pass.disabled = true
            trys +=1
            if (switchVariable ==1){
                playerOneScore1 -= Number(clickedButton[0].textContent)
                currentPlayer.textContent = `Player 1 Score : ${playerOneScore1}`
            }
            else if (switchVariable == -1){
                playerTwoScore2 -= Number(clickedButton[0].textContent)
                currentPlayer.textContent = `Player 2 Score : ${playerTwoScore2}`
            }
            switchVariable *= -1
            switch(switchVariable){
                case -1:
                    playerTurn.textContent = "Player 2 Turn"
                    currentPlayer = playerTwo
                    break;
                case 1:
                    playerTurn.textContent = "Player 1 Turn"
                    currentPlayer = playerOne
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


nextRound.addEventListener("click", event =>{

    window.location.replace(`round-2.html?switchVariable=${switchVariable}&playerOneScore=${playerOneScore1}&playerTwoScore=${playerTwoScore2}`)})


pass.addEventListener("click", event => {
    event.preventDefault()
    passedClicked = true
    pass.disabled = true
    switchVariable = switchVariable * -1
    switch(switchVariable){
        case -1:
            playerTurn.textContent = "Player 2 Turn"
            currentPlayer = playerTwo
            break;
        case 1:
            playerTurn.textContent = "Player 1 Turn"
            currentPlayer = playerOne
            break;}
    alert (`Other player's turn... ${qObject.question}`)
    
})

guess.addEventListener("click", event =>{
    event.preventDefault()
    checkAnswer(qObject)
    })

