import placeholderQuestions from "./scripts/placeholder-questions.js";


// access final question and set up variables from query parameters
let lastQuestion = placeholderQuestions[60]
let url = document.location.search 
let params = new URLSearchParams(url)
let switchVariable = Number(params.get("switchVariable"))
let playerOneScore1 = Number(params.get("playerOneScore1"))
let playerTwoScore2 = Number(params.get("playerTwoScore2"))


// switch variable set to one to ensure that player 1 makes first wager
switchVariable = 1

// access HTML elements
let wager = document.getElementById("user-input")
let finalAnswer = document.getElementById("user-input2")
let betButton = document.getElementById("bet-button")
let guessButton = document.getElementById("guess-button")
let finalQuestion = document.getElementById("final-question")
let playerTurn = document.getElementById("player-turn")
guessButton.disabled = true

// global variables for later use to access each player's guess and keep track of how many players made wagers and guesses
let playersBet = []
let playerGuess = []
let clicksBet = 0
let clicksGuess = 0





// check players' answers
function checkAnswer(guessList){
    // player one guess correlates to the first answer
    let playerOneAnswer = guessList[0]
    // player two guess correlates to the second answer
    let playerTwoAnswer = guessList[1]
// add or subtract wager based on if answer was correct or wrong. Used if only since each event are mutually exclusive
    if (playerOneAnswer.toLowerCase().trim() == lastQuestion.answer.toLowerCase()){
        playerOneScore1 += Number(playersBet[0])
    }
    if (playerTwoAnswer.toLowerCase().trim() == lastQuestion.answer.toLowerCase()){
        playerTwoScore2 += Number((playersBet[1]))
    }
    if (playerOneAnswer.toLowerCase().trim() != lastQuestion.answer.toLowerCase()){
        playerOneScore1 -= Number(playersBet[0])
    }
    if (playerTwoAnswer.toLowerCase().trim() != lastQuestion.answer.toLowerCase()){
        playerTwoScore2 -= Number(playersBet[0])
    }
    
    // check which player has more points and declare winner
    playerOneScore1 > playerTwoScore2
    ? alert (`Player one won with ${playerOneScore1} points`)
    : playerOneScore1 == playerTwoScore2 
    ? alert (`Player one and two have the same amount of points. Player One points : ${playerOneScore1}. Player two points: ${playerTwoScore2}`)
    : alert (`Player two won with ${playerTwoScore2} points`)

}

//alert bet was made. clicksBet = 0 
betButton.addEventListener("click", event => {
    event.preventDefault()
     // clickbet used to alert which player made their wager
    clicksBet +=1

    if (clicksBet == 1){
        alert ("Player one made their wager")
        playerTurn.textContent = "PLAYER 2 WAGER "
        // push the wager into an array for later use in checkAnswer
        playersBet.push(wager.value)
    }
    
    else if (clicksBet == 2) {
        alert("Player 2 made their wager")
        playersBet.push(wager.value)
        betButton.disabled = true;

        // setTimeout to prepare question and change player's turn text context. Increasing timeout to give players time to see each message
        setTimeout(() => {
            alert("Ok... Preparing for your question")
        }, 1000);

        setTimeout(() => {
            guessButton.disabled = false
            finalQuestion.textContent = lastQuestion.question
            playerTurn.textContent = "PLAYER 1 GUESS "
        }, 8000);
           
    }
    wager.value = ""
})

//alert guess was made. clicksGuess = 0
guessButton.addEventListener("click", event => {
    event.preventDefault()
    clicksGuess +=1

    if (clicksGuess == 1){
        alert ("Player one made their guess")
        playerTurn.textContent = "PLAYER 2 GUESS "
        // push the guess into an array for later use in checkAnswer
        playerGuess.push(finalAnswer.value)
    }

    if (clicksGuess == 2) {
        alert("Player 2 made their guess")
        playerGuess.push(finalAnswer.value)
        guessButton.disabled = true

        // setTimeout placed in order with increasing timeout to give players time to see each message
        setTimeout(() => {
            alert("Ok... LET'S SEE WHO WON")
        }, 2000);

        setTimeout(() => {
        finalQuestion.textContent = `ANSWER : ${lastQuestion.answer}`
        playerTurn.textContent = "GAME OVER"
           checkAnswer(playerGuess)
        }, 8000);

    }
    finalAnswer.value = ""
    
})







