var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var random1 = "images/"+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",random1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6)+1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var random2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",random2);

if(random1>random2){
  document.querySelector("h1").innerHTML = "Player 1 Won!🤗 🏴‍☠️"
}
else if (random2>random1) {
  document.querySelector("h1").innerHTML = "Player 2 Won! 😎 🚩"
}
else{
  document.querySelector("h1").innerHTML = "Match Draw!😜 🏳️"
}
