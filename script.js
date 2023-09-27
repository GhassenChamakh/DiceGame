var randomNumber1=Math.floor(Math.random()*6)+1; //random number 1-6

var randomDiceImage="dice"+randomNumber1+".png";  //random image dice1-6.png

var randomDiceSource= "images/"+randomDiceImage ; //random image source
var image1=document.querySelectorAll("img")[0];


image1.setAttribute("src",randomDiceSource);

var randomNumber2=Math.floor(Math.random()*6)+1; //random number 1-6

var randomDiceImage2="dice"+randomNumber2+".png";  //random image dice1-6.png

var randomDiceSource2= "images/"+randomDiceImage2 ; //random image source
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Play 1 is Wins!"
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Play 2 is Wins!"
}
else
{document.querySelector("h1").innerHTML="Draw"}



const refreshButton = document.getElementById('refreshButton');

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton
refreshButton.addEventListener('click', function() {
 
  location.reload();
});