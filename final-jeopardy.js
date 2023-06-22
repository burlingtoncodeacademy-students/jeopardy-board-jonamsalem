import placeholderQuestions from "./scripts/placeholder-questions.js";

let lastQuestion = placeholderQuestions[60]
console.log(lastQuestion)
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
guessButton.disabled = true
let playersBet = []
let playerGuess = []
let clicksBet = 0
let clicksGuess = 0

alert("Welcome to the last round... Please make a wager")





function checkAnswer(guessList){
    let playerOneAnswer = guessList[0]
    let playerTwoAnswer = guessList[1]
    if (playerOneAnswer.toLowerCase().trim() == lastQuestion.answer){
        alert ("Player One got the correct answer")
    }
    else if (playerTwoAnswer.toLowerCase().trim() == lastQuestion.answer){
        alert('Player Two got the correct answer')
    }
    else {
        alert("nobody got the correct answer")
    }
}

betButton.addEventListener("click", event => {
    event.preventDefault()
    clicksBet +=1
    if (clicksBet == 1){
    alert ("Player one made their bet")}
    playersBet.push(wager.value)
    wager.value = ""
    if (clicksBet == 2) {
        alert("Player 2 made their wager")
        betButton.disabled = true;
        wager.value = ""
        setTimeout(() => {
            alert("Ok... Preparing for your question")
        }, 2000);

        setTimeout(() => {
            guessButton.disabled = false
            alert(lastQuestion.question)
        }, 8000);
           
    }
})

guessButton.addEventListener("click", event => {
    event.preventDefault()
    clicksGuess +=1
    if (clicksGuess == 1){
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
           checkAnswer(playerGuess)
        }, 5000);
        
    }
    
})







