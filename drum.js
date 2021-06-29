var buttonList=document.querySelectorAll(".drum_button"), numberOfDrumButtons=buttonList.length;
document.addEventListener("keydown", function() {
  makeSound (event.key);
  buttonAnimation(event.key);
}
);
for (let i=0; i<numberOfDrumButtons; i++) {
  buttonList[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  }
  );
}
function makeSound(letter) {
  switch (letter) {
    case "w":
      var tom4= new Audio ("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "a":
      var snare= new Audio ("sounds/snare.mp3");
      snare.play();
      break;
    case "s":
      var crash= new Audio ("sounds/crash.mp3");
      crash.play();
      break;
    case "d":
      var tom3= new Audio ("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "j":
      var kick= new Audio ("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var tom1= new Audio ("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "l":
      var tom2= new Audio ("sounds/tom-2.mp3");
      tom2.play();
      break;
    default:
  }
}

function buttonAnimation(currentKey) {
  var activeButton=document.querySelector("." + currentKey);
  activeButton.classList.add ("pressed");
  setTimeout (function(){
    activeButton.classList.remove ("pressed");
  }, 100)
}
