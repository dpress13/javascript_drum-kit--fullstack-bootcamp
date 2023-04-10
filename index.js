// Detect which button / "letter" was clicked
var numDrumButtons = document.querySelectorAll(".drum").length;
for (var drumNum = 0; drumNum < numDrumButtons; drumNum++) {
  document.querySelectorAll(".drum")[drumNum].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detect which key / letter was pressed
document.addEventListener("keydown", function(event) {
  var keyPressed = event.key;
  keyPressed = keyPressed.toLowerCase();
  playSound(keyPressed);
  buttonAnimation(keyPressed);
});

function playSound(key) {
  switch (key) { 

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
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
  activeButton.classList.toggle("pressed");  

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
