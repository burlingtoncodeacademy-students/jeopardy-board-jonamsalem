import placeholderQuestions from "./placeholder-questions.js";

// declare query params as varaibles for later use
let url = document.location.search 
let params = new URLSearchParams(url)
let switchVariable = Number(params.get("switchVariable"))
let playerOneScore1 = Number(params.get("playerOneScore1"))
let playerTwoScore2 = Number(params.get("playerTwoScore2"))

// declare global variables and access html elements
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
let modal = document.querySelector(".modal")
let modalContent = document.querySelector(".modal-content")
let passedClicked = false
pass.disabled = true
guess.disabled = true
let clickAmount 

// nextRound disabled
nextRound.style.pointerEvents= "none"

let updatedQuestions = placeholderQuestions

// second half of the questions
let natureQuestions = placeholderQuestions.slice(5,10)

let animalQuestions = placeholderQuestions.slice(15,20)

let computerQuestions = placeholderQuestions.slice(25,30)

let mythologyQuestions = placeholderQuestions.slice(35,40)

let historyQuestions = placeholderQuestions.slice(45, 50)

let generalQuestions = placeholderQuestions.slice(55,60)


// check which player's turn it is
switchVariable == 1
? playerTurn.textContent= "Player 1 Turn"
: playerTurn.textContent = "Player 2 Turn"

// display both players' turn
playerOne.textContent = `Player 1 Score : ${playerOneScore1}`
playerTwo.textContent = `Player 2 Score: ${playerTwoScore2}`


// Same logic as round 1 from here on
function disableButtons (event){
    buttons.forEach(button=>{
            button.disabled = true;}
        )}

function enableButtons (event){
    buttons.forEach(button=>{
            button.disabled = false;}
        )}


 function chooseQuestion(button){
    switch (button[0].className){
        case "nature":
             qObject = (natureQuestions[Math.floor(Math.random() * natureQuestions.length)])
             question = qObject.question
             modalContent.textContent = question
             modal.style.display = "block";
             natureQuestions = natureQuestions.filter(questions => questions != qObject)

             break; 
         case "animals":
             qObject = (animalQuestions[Math.floor(Math.random() * animalQuestions.length)])
             question = qObject.question
             modalContent.textContent = question
             modal.style.display = "block";
             animalQuestions = animalQuestions.filter(questions => questions != qObject)

             break;
         case "computers":
             qObject = (computerQuestions[Math.floor(Math.random() * computerQuestions.length)])
             question = qObject.question
             modalContent.textContent = question
             modal.style.display = "block";
             computerQuestions = computerQuestions.filter(questions => questions != qObject)

             break;
         case "mythology":
             qObject = (mythologyQuestions[Math.floor(Math.random() * mythologyQuestions.length)])
             question = qObject.question
             modalContent.textContent = question
             modal.style.display = "block";
             mythologyQuestions = mythologyQuestions.filter(questions => questions != qObject)

             break;
         case "history":
             qObject = (historyQuestions[Math.floor(Math.random() * history.length)])
             question = qObject.question
             modalContent.textContent = question
             modal.style.display = "block";
             historyQuestions = historyQuestions.filter(questions => questions != qObject)

             break;
         case "general":
             qObject = (generalQuestions[Math.floor(Math.random() * generalQuestions.length)])
             question = qObject.question
             modalContent.textContent = question
             modal.style.display = "block";
             generalQuestions = generalQuestions.filter(questions => questions != qObject)
             break;
     } 
     updatedQuestions= updatedQuestions.filter(questions => questions != qObject)
     guess.disabled = false
     pass.disabled = false

    }

function checkAnswer(question){
        if (userInput.value.toLowerCase().trim() == question.answer.toLowerCase().trim()){
            modal.style.display = "none";
            trys = 0
            guess.disabled = true
            pass.disabled = true
            passedClicked = false
            alert("Nice, you get another question")
            enableButtons()
            
            if (switchVariable == 1){
            playerOneScore1 += Number(clickedButton[0].textContent)
            playerOne.textContent = `Player 1 Score : ${playerOneScore1}`
            }
            else if (switchVariable == -1){
                playerTwoScore2 += Number(clickedButton[0].textContent)
                playerTwo.textContent = `Player 2 Score : ${playerTwoScore2}`
            }

            if (playerOneScore1 >= 30000|| playerTwoScore2 >= 30000 || updatedQuestions.length == 31){
                alert("You must now move on to round 2. Please click the 'next round' button.")
                disableButtons()
                guess.disabled = true
                pass.disabled = true
                nextRound.style.pointerEvents = "auto"
                
                
                }
        }
        else if (userInput.value.toLowerCase().trim() != question.answer.toLowerCase()){

                if (passedClicked == true){
                    modal.style.display = "none";
                    alert("Wrong. Choose another question")
                    passedClicked = false
                    enableButtons()
                    guess.disabled = true
                    pass.disabled = true
                    if (switchVariable ==1){
                        playerOneScore1 -= Number(clickedButton[0].textContent)
                        playerOne.textContent = `Player 1 Score : ${playerOneScore1}`
                        }
                    else if (switchVariable == -1){
                        playerTwoScore2 -= Number(clickedButton[0].textContent)
                        playerTwo.textContent = `Player 2 Score : ${playerTwoScore2}`
                     }
                }

                else if (trys == 1){
                    if (updatedQuestions.length == 31){
                        alert("Wrong. You must now move on to round 2. Please click the 'next round' button.")
                        disableButtons()
                        guess.disabled = true
                        pass.disabled = true
                        nextRound.style.pointerEvents = "auto" 
                        }
                    else if (switchVariable ==1){
                        playerOneScore1 -= Number(clickedButton[0].textContent)
                        playerOne.textContent = `Player 1 Score : ${playerOneScore1}`
                        }
                    else if (switchVariable == -1){
                        playerTwoScore2 -= Number(clickedButton[0].textContent)
                        playerTwo.textContent = `Player 2 Score : ${playerTwoScore2}`}
                    trys = 0
                    modal.style.display = "none";
                    alert ("Wrong. Other player must now choose a new question")
                    switchVariable *= -1
                    switch(switchVariable){
                        case -1:
                            playerTurn.textContent = "Player 2 Turn"
                            break;
                        case 1:
                            playerTurn.textContent = "Player 1 Turn"
                            break;
                    }
                    enableButtons()
                    guess.disabled = true
                    pass.disabled = true
                }
                
                else {
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
        }
    }
            
            userInput.value = ""
}
// question buttons clicked --> disable  buttons, and remove chosen button,     

buttons.forEach(button => {
    button.addEventListener("click", disableButtons)
    button.addEventListener("click", () => {
        button.style.backgroundColor = "black"
        
        clickedButton = Array.from(buttons).filter(btn => btn == button)
        chooseQuestion(clickedButton)
    })
})


nextRound.addEventListener("click", event =>{

    window.location.replace(`final-jeopardy.html?switchVariable=${switchVariable}&playerOneScore1=${playerOneScore1}&playerTwoScore2=${playerTwoScore2}`)})


    pass.addEventListener("click", event => {
        console.log(clickAmount)
        event.preventDefault()
        passedClicked = true
        clickAmount += 1
        if (clickAmount == 2){ 
            modal.style.display = "none";
            alert("Other player chooses question")
            passedClicked = false
    
            enableButtons()
            clickAmount = 0
        }
        else if (clickAmount =1){
            alert (`Other player's turn... ${qObject.question}`)
        }
        switchVariable = switchVariable * -1
        switch(switchVariable){
            case -1:
                playerTurn.textContent = "Player 2 Turn"
                break;
            case 1:
                playerTurn.textContent = "Player 1 Turn"
                break;}
    
    
    })
    

guess.addEventListener("click", event =>{
    event.preventDefault()
    checkAnswer(qObject)
    })

