import placeholderQuestions from "./scripts/placeholder-questions.js";

let url = document.location.search 
let params = new URLSearchParams(url)
let switchVariable = Number(params.get("switchVariable"))
let playerOneScore1 = Number(params.get("playerOneScore1"))
let playerTwoScore2 = Number(params.get("playerTwoScore2"))

console.log(Number(switchVariable))


let clickedButton
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
let passedClicked = false
pass.disabled = true
guess.disabled = true
nextRound.style.pointerEvents= "none"


let updatedQuestions = placeholderQuestions

let natureQuestions = placeholderQuestions.slice(5,10)

let animalQuestions = placeholderQuestions.slice(15,20)

let computerQuestions = placeholderQuestions.slice(25,30)

let mythologyQuestions = placeholderQuestions.slice(35,40)

let historyQuestions = placeholderQuestions.slice(45, 50)

let generalQuestions = placeholderQuestions.slice(55,60)



switchVariable == 1
? playerTurn.textContent= "Player 1 Turn"
: playerTurn.textContent = "Player 2 Turn"

playerOne.textContent = `Player 1 Score : ${playerOneScore1}`
playerTwo.textContent = `Player 2 Score: ${playerTwoScore2}`



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
                playerOne.textContent = `Player 1 Score : ${playerOneScore1}`
                }
    
                else if (switchVariable == -1){
                    playerTwoScore2 -= Number(clickedButton[0].textContent)
                    playerTwo.textContent = `Player 2 Score : ${playerTwoScore2}`
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
            playerOne.textContent = `Player 1 Score : ${playerOneScore1}`
            }

            else if (switchVariable == -1){
                playerTwoScore2 += Number(clickedButton[0].textContent)
                playerTwo.textContent = `Player 2 Score : ${playerTwoScore2}`
            }


            if (playerOneScore1 >=30000 || playerTwoScore2 >= 30000 || updatedQuestions.length == 30){
                alert("You must now move on to the last round. Please click the 'next round' button.")
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
                playerOne.textContent = `Player 1 Score : ${playerOneScore1}`
            }
            else if (switchVariable == -1){
                playerTwoScore2 -= Number(clickedButton[0].textContent)
                playerTwo.textContent = `Player 2 Score : ${playerTwoScore2}`
            }
            switchVariable *= -1
            switch(switchVariable){
                case -1:
                    playerTurn.textContent = "Player 2 Turn"
                    break;
                case 1:
                    playerTurn.textContent = "Player 1 Turn"
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

    window.location.replace(`final-jeopardy.html?switchVariable=${switchVariable}&playerOneScore1=${playerOneScore1}&playerTwoScore2=${playerTwoScore2}`)})


pass.addEventListener("click", event => {
    event.preventDefault()
    passedClicked = true
    pass.disabled = true
    switchVariable = switchVariable * -1
    switch(switchVariable){
        case -1:
            playerTurn.textContent = "Player 2 Turn"
            break;
        case 1:
            playerTurn.textContent = "Player 1 Turn"
            break;}
    alert (`Other player's turn... ${qObject.question}`)
    
})

guess.addEventListener("click", event =>{
    event.preventDefault()
    checkAnswer(qObject)
    })

