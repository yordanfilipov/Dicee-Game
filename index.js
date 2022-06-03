var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var title = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
  title.textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  title.textContent = "Player 1 Wins!";
} else {
  title.textContent = "Player 2 Wins!";
}