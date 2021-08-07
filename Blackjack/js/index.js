// Variables
let cards = [0, 0];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let questionMessage = "";
// Objects
let player = {
    name: null,
    chips: null
}
// Elements
let questionEl = document.querySelector("#questionLabel");
let sumEL = document.querySelector("#sumLabel");
let cardsEl = document.querySelector("#cardsLabel");
let playerEl = document.querySelector("#playerP");
// Main
questionEl.textContent = "Want to play a round?";
player.name = "burh";
player.chips = 52;

// Functions
function startGame() {
    cards.splice(0);
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1];
    isAlive = true;
    hasBlackJack = false;
    playerEl.textContent = "----";
    renderGame();
}

function renderGame() {

    if(sum <= 20)
    message = "Draw a new card?";
    else if(sum === 21 ){
        message = "You've got Blackjack!";
        hasBlackJack = true;
        playerEl.textContent = player.name + ": $" + player.chips;
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
    }
    questionEl.textContent = message;

    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
        cardsEl.textContent += " " + cards[i];

    sumEL.textContent = "Sum: " + sum;    
}

function newCards() {
    if(isAlive && !hasBlackJack)
    {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}

function getRandomCard() {
    return Math.round(Math.random() * 9) + 2;
}

