var randomNumber1 = randomDice();
var randomNumber2 = randomDice();
var heading = document.querySelector("h1");
var images = document.querySelectorAll("img");
setImage(0,randomNumber1);
setImage(1,randomNumber2);
declareWinner(randomNumber1,randomNumber2);

function setImage(index,rd){
    images[index].setAttribute("src","images/dice"+rd+".png");
}
function randomDice(){
   return Math.floor(Math.random()*6)+1;
}


function declareWinner(rd1,rd2)
{
    if(rd1 > rd2){
        heading.textContent = "⛳Player 1 Wins!";
    }
    else if (rd1 < rd2){
        heading.textContent = "Player 2 Wins!⛳";
    }else {
        heading.textContent = "Draw!";
    }
    
}