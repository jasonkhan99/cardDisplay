$( document ).ready(function() {
  const cardDeck = [];
  const suits = ["hearts", "clubs", "diamonds", "spades"];
  const nums = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  suits.forEach(function(suit) {
    nums.forEach(function(num) {
      cardDeck.push(" " + num + " of " + suit);
    });
  });
  $("#cardDeck").text(cardDeck);
});