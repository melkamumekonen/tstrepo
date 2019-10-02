level = 0;
gamePattern = [];
userClickedPattern = [];
buttonColours = ["red", "blue", "green", "yellow"];

$(".btn").on('click', function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log("the color is : " + userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

$(document).keydown(function (e) { // bind key press event handler to all document
    if (level === 0) {
        $("h1").text("Level " + level);
        setTimeout(function () {
            //your code to be executed after 1 second
            nextSequence();
        }, 1000);
    }
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        //your code to be executed after 1 second
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (currentLevel >= gamePattern.length - 1) {
            setTimeout(function () {
                //your code to be executed after 1 second
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
        console.log("success");
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            //your code to be executed after 1 second
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    $("h1").text("Level " + (++level));
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}