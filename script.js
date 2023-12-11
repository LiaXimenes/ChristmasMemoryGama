let numberOfCards;
let cardsAtGame = [];
let flippedCard = null;
let amountOfFlips = 0;
let amountOfSuccessfulFLips = 0;
const gameBoard = document.querySelector(".game");
const arrayOfCards = [
  "christmas-tree.png",
  "christmas-sock.png",
  "gingerbread-man.png",
  "wreath.png",
  "snow-man.png",
  "santa-hat.png",
  "presents.png",
  "christmas-cane.png",
];

function amountOfCards() {
  if (numberOfCards < 4 || numberOfCards > 16 || numberOfCards % 2 !== 0) {
    while (numberOfCards < 4 || numberOfCards > 16 || numberOfCards % 2 !== 0) {
      numberOfCards = prompt(
        "How many cards do you want to play with? Max of 16"
      );
    }
  }

  for (let i = 0; i < numberOfCards / 2; i++) {
    const addCardToGame = `<li class="cards" onclick="turnCard(this)">
            <img src="cards/merry-christmas.png" class="front">
            <img src="cards/${arrayOfCards[i]}" class="back">
        </li>`;

    cardsAtGame.push(addCardToGame);
    cardsAtGame.push(addCardToGame);
  }

  cardsAtGame.sort(() => Math.random() - 0.5);

  for (let i = 0; i < numberOfCards; i++) {
    gameBoard.innerHTML += cardsAtGame[i];
  }
}

function turnCard(card) {
  card.classList.add("turned");
  compareCards(card);

  amountOfFlips = amountOfFlips + 1;
}

function compareCards(card) {
  if (flippedCard === null) {
    flippedCard = card;
    flippedCard.setAttribute("onclick", " ");
  } else if (flippedCard.innerHTML === card.innerHTML) {
    card.setAttribute("onclick", " ");
    flippedCard.setAttribute("onclick", " ");
    flippedCard = null;
    amountOfSuccessfulFLips = amountOfSuccessfulFLips + 1;
  } else {
    setTimeout(flipCardBack, 1000, flippedCard, card);
    flippedCard = null;
  }

  endOfGame();
}

function flipCardBack(flippedCard, card) {
  flippedCard.classList.remove("turned");
  card.classList.remove("turned");
  flippedCard.setAttribute("onclick", "turnCard(this)");
  card.setAttribute("onclick", "turnCard(this)");
}

function endOfGame() {
  if (amountOfSuccessfulFLips === numberOfCards / 2) {
    finalAlert();
  }
}

function finalAlert() {
  alert("Congratulation, you won in " + amountOfFlips + " flips");
}

amountOfCards();
