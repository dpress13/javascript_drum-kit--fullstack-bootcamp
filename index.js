// Detecting Button Click

var numDrumButtons = document.querySelectorAll(".drum").length;
for (var drumNum = 0; drumNum < numDrumButtons; drumNum++) {
  document.querySelectorAll(".drum")[drumNum].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML); // going to pass in the letter clicked to playSound with this method. saying send the inner html of the button that was clicked to the playSound method
  }); //If a button was clicked, it's going to check the innerHTML of the button that was clicked and send that to make sound in order to play the relevant sound.
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
  var keyPressed = event.key;
  keyPressed = keyPressed.toLowerCase(); // Allow capital letters to also activate animation and sounds
  playSound(keyPressed);
  buttonAnimation(keyPressed);
  // If a keypress was detected instead, then the key's letter property that was pressed - "s" - will be sent to make sound
});

function playSound(key) {
  switch (key) { //going to switch on key. will switch based on key parameter and play the relevant sound based on which key was passed in

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play(); //is a method that will play the sound
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(key);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.toggle("pressed");  //notice the semicolon here as if it were two older variables or js things we were adding under simpler functions

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
