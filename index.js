/*

will play different sound depending on a button click or a keystroke
by breaking problem down into 3 parts:

1. identify button click
2. identify keystroke
3. play sound

*/


/* this event listener marks the keystroke, and passes the KeyboardEvent object
called from the "keydown" listener (var e) to the function make sound, we use
e.key to grab the property value of the keystroke */

document.addEventListener("keydown", function(event) {

  // play sound
  makeSound(event.key);
  // add Animation
  buttonAnimation(event.key);


});



// grabs all buttons on the page in an array
var buttons = document.querySelectorAll("button");

// cycles through each button in array to grab text value of each button when clicked
for (i = 0; i < buttons.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    // passes text value of button to function makeSound
    makeSound(buttonInnerHTML);
    // add Animation
    buttonAnimation(buttonInnerHTML);
  });
}



/* this function makes the sound dependent on "key" variable passed to
function as long as variable matches the case value */

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
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
      console.log("No sound played");

  }
}


// add animation via class and setTimeout

function buttonAnimation (currentKey){

/*
currentKey is passed through the click and keydown eventListeners
use querySelector and concatenation to translate value into class to
locate corresponding button
*/
  var pressedButton = document.querySelector("." + currentKey);
  pressedButton.classList.add("pressed");

// use timeout to add delay before removing pressed class

setTimeout (function () {
  pressedButton.classList.remove("pressed");
},100);

}
