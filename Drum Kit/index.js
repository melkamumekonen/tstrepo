var buttons = document.querySelectorAll(".drum");
//button press
for (var i = 0; i < buttons.length; i++) {
    // attach event listner to the  button using button pressbutton press
    buttons[i].addEventListener("click", function () {
        var audioFile = getAudio(this.textContent);
        var audio = new Audio("sounds/" + audioFile);
        audio.play();
        buttonAnimation(this.textContent);
    });

}

//keyboard press
// attach event listner to the whole document to keyboard press
document.addEventListener("keydown", function (event) {
    var audioFile = getAudio(event.key);
    var audio = new Audio("sounds/" + audioFile);
    audio.play();
    buttonAnimation(event.key);
});


function getAudio(fileName) {
    var audioFile = "";
    switch (fileName) {
        case "w":
            audioFile = "tom-1.mp3"
            break;
        case "a":
            audioFile = "tom-2.mp3"
            break;
        case "s":
            audioFile = "tom-4.mp3"
            break;
        case "d":
            audioFile = "tom-3.mp3"
            break;
        case "j":
            audioFile = "snare.mp3"
            break;
        case "k":
            audioFile = "crash.mp3"
            break;
        case "l":
            audioFile = "kick-bass.mp3"
            break;
        default:
            console.log(audioFile);
            break;
    }

    return audioFile;
}

function buttonAnimation(currentKey) {
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    }, 100);
}