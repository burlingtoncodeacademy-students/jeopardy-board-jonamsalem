import placeholderQuestions from "./scripts/placeholder-questions.js";

// declare global variables for later use
let clickedButton
let playerOneScore1 = 0
let playerTwoScore2 = 0
// switchvariable determines who's turn it is, starts with player 1
let switchVariable = 1
let qObject
let trys = 0
let question
// acquire html components for later use
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

// first- round start features
playerTurn.textContent = "Player 1 Turn"
let passedClicked = false
pass.disabled = true
guess.disabled = true
// nextRound disabled
nextRound.style.pointerEvents= "none"

// created array that is later used for checking how many questions used
let updatedQuestions = placeholderQuestions

// questions by topic, half of the questiona
let natureQuestions = placeholderQuestions.slice(0,5)
let animalQuestions = placeholderQuestions.slice(10,15)
let computerQuestions = placeholderQuestions.slice(20,25)
let mythologyQuestions = placeholderQuestions.slice(30,35)
let historyQuestions = placeholderQuestions.slice(40, 45)
let generalQuestions = placeholderQuestions.slice(50,55)

// disable all buttons
function disableButtons (event){
    buttons.forEach(button=>{
            button.disabled = true;}
        )}


// choose and display question depending where used clicked
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
     // create updated array
     updatedQuestions= updatedQuestions.filter(questions => questions != qObject)
     // enable guess and pass buttons
     guess.disabled = false
     pass.disabled = false

    }

// check answers
function checkAnswer(question){
    console.log(passedClicked, trys)
        // answer was correct 
        if (userInput.value.toLowerCase().trim() == question.answer.toLowerCase().trim()){
            modal.style.display = "none";
            // reset trys if one answered wrong and other answered correct
            trys = 0
            guess.disabled = true
            pass.disabled = true
            passedClicked = false
            alert("Nice, you get another question")
            buttons.forEach(btn => {
            btn.disabled = false;})

             // add points based on whose turn it is 
            if (switchVariable == 1){
            playerOneScore1 += Number(clickedButton[0].textContent)
            playerOne.textContent = `Player 1 Score : ${playerOneScore1}`
            }
            else if (switchVariable == -1){
                playerTwoScore2 += Number(clickedButton[0].textContent)
                playerTwo.textContent = `Player 2 Score : ${playerTwoScore2}`
            }

            // move to next round if reached 15000 points or round1 board all used
            if (playerOneScore1 >= 15000 || playerTwoScore2 >= 15000 || updatedQuestions.length == 30){
                alert("You must now move on to round 2. Please click the 'next round' button.")
                buttons.forEach(btn => {
                    btn.disabled = true;})
                guess.disabled = true
                pass.disabled = true
                nextRound.style.pointerEvents = "auto"
                
                
                }
        }
        // player answered wrong and trys increase by one to ensure that question will not be asked again
        else if (userInput.value.toLowerCase().trim() != question.answer.toLowerCase()){
                if (passedClicked == true){
                    modal.style.display = "none";
                    alert("Wrong. Choose another question")
                    // reset trys to differentiate whether one or two players guessed on one question
                    // reset pass button
                    passedClicked = false
                    // enable question buttons
                    buttons.forEach(btn => {
                    btn.disabled = false;})
                    // disable guess and pass buttons
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
                    if (switchVariable ==1){
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
                    // enable question buttons
                    buttons.forEach(btn => {
                    btn.disabled = false;})
                    // disable guess and pass buttons
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
            
            // reset input value
            userInput.value = ""
}
// question buttons clicked --> disable other buttons, change clicked button background,     
buttons.forEach(button => {
    button.addEventListener("click", disableButtons)
    button.addEventListener("click", () => {
        button.style.backgroundColor = "black"
        // create an array of the chosen question
        clickedButton = Array.from(buttons).filter(btn => btn == button)
        chooseQuestion(clickedButton)})})

// use query parameters to pass the players' score and the switchvariable
nextRound.addEventListener("click", event =>{

    window.location.replace(`round-2.html?switchVariable=${switchVariable}&playerOneScore1=${playerOneScore1}&playerTwoScore2=${playerTwoScore2}`)})


// pass button clicked disables the button 
pass.addEventListener("click", event => {
    event.preventDefault()
    // fulfills  part of the checkAnswer conditional to instruct users to choose new question after guess
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

// checkAnswer function called when guess is clicked
guess.addEventListener("click", event =>{
    event.preventDefault()
    checkAnswer(qObject)
    })

