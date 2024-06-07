
// Create two random numbers between 1-6 for the dice
var randomNumber1 = Math.ceil((Math.random() * 6));
var randomNumber2 = Math.ceil((Math.random() * 6));

// Create the path for the images with the random numbers
var randomDiceImg1 = "images/"+"dice"+randomNumber1+".png";
var randomDiceImg2 = "images/"+"dice"+randomNumber2+".png";

// Change the attributes of the two images with the random ones
document.querySelector(".img1").setAttribute("src", randomDiceImg1);
document.querySelector(".img2").setAttribute("src", randomDiceImg2);


// Check which player has higher dice row and display the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
} 
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
} 
else {
    document.querySelector("h1").innerHTML = "It's a draw !";
}
