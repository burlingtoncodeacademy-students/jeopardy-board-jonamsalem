import placeholderQuestions from "./scripts/placeholder-questions.js";

let lastQuestion = placeholderQuestions[60]
let url = document.location.search 
let params = new URLSearchParams(url)
let switchVariable = Number(params.get("switchVariable"))
let playerOneScore1 = Number(params.get("playerOneScore1"))
let playerTwoScore2 = Number(params.get("playerTwoScore2"))



switchVariable = 1
let wager = document.getElementById("user-input")
let finalAnswer = document.getElementById("user-input2")
let betButton = document.getElementById("bet-button")
let guessButton = document.getElementById("guess-button")
let finalQuestion = document.getElementById("final-question")
let playerTurn = document.getElementById("player-turn")
guessButton.disabled = true
let playersBet = []
let playerGuess = []
let clicksBet = 0
let clicksGuess = 0

alert("Welcome to the last round... Please make a wager")





function checkAnswer(guessList){
    let playerOneAnswer = guessList[0]
    let playerTwoAnswer = guessList[1]
    if (playerOneAnswer.toLowerCase().trim() == lastQuestion.answer.toLowerCase()){
        playerOneScore1 += Number(playersBet[0])
    }
    if (playerTwoAnswer.toLowerCase().trim() == lastQuestion.answer.toLowerCase()){
        alert('Player Two got the correct answer')
        playerTwoScore2 += Number((playersBet[1]))
    }
    if (playerOneAnswer.toLowerCase().trim() != lastQuestion.answer.toLowerCase()){
        playerOneScore1 -= Number(playersBet[0])
    }
    if (playerTwoAnswer.toLowerCase().trim() != lastQuestion.answer.toLowerCase()){
        playerTwoScore2 -= Number(playersBet[0])
    }
    
    playerOneScore1 > playerTwoScore2
    ? alert (`Player one Score won with ${playerOneScore1} points`)
    : playerOneScore1 = playerTwoScore2 
    ? alert (`Player one and two have the same amount of points. Player One points : ${playerOneScore1}. Player two points:${playerTwoScore2}`)
    : alert (`Player 2 won with ${playerTwoScore2} points`)

}

betButton.addEventListener("click", event => {
    event.preventDefault()
    clicksBet +=1
    if (clicksBet == 1){
    alert ("Player one made their wager")}
    playerTurn.textContent = "PLAYER 2 GUESS "
    playersBet.push(wager.value)
    wager.value = ""
    if (clicksBet == 2) {
        alert("Player 2 made their wager")
        betButton.disabled = true;
        wager.value = ""
        setTimeout(() => {
            alert("Ok... Preparing for your question")
        }, 1000);

        setTimeout(() => {
            guessButton.disabled = false
            finalQuestion.textContent = lastQuestion.question
            playerTurn.textContent = "PLAYER 1 GUESS "
        }, 8000);
           
    }
})

guessButton.addEventListener("click", event => {
    event.preventDefault()
    clicksGuess +=1
    if (clicksGuess == 1){
    playerTurn.textContent = "PLAYER 2 GUESS "
    alert ("Player one made their guess")}
    playerGuess.push(finalAnswer.value)
    finalAnswer.value = ""
    if (clicksGuess == 2) {
        alert("Player 2 made their guess")
        betButton.disabled = true;
        finalAnswer.value = ""
        setTimeout(() => {
            alert("Ok... LET'S SEE WHO WON")
        }, 2000);
        setTimeout(() => {
        finalQuestion.textContent = `answer : ${lastQuestion.answer}`
           checkAnswer(playerGuess)
        }, 5000);
        
    }
    
})

// check answer not working 






