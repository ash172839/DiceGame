var randomNumber=Math.floor(Math.random()*6+1);
var randomImages="./images/dice" + randomNumber + ".png";
var randomNumber2=Math.floor(Math.random()*6+1);
var randomImages2="./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImages);
document.querySelectorAll("img")[1].setAttribute("src",randomImages2);
if (randomNumber>randomNumber2) {
    document.querySelector("h1").innerHTML="Player1 Wins 🎌";
} else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins 🎌";
}
else if(randomNumber=randomNumber2){
    document.querySelector("h1").innerHTML="Draw😔"
}