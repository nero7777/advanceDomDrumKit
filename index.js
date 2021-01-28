//Using loop and adding a eventlistener to every button using querySelectorAll which returns an array of buttons

for (var v = 0; v < document.querySelectorAll(".drum").length; v++) {
  document.querySelectorAll(".drum")[v].addEventListener("click", function () {
    var clickedButton = this.innerHTML;
        makesound(clickedButton);
        buttonAnimation(clickedButton);
  });
}

//for detecting the key which was pressed on keyboard

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})


//a general function for both the eventListners to play audio according to the data

function makesound(key){
        
    switch (key) {
        case "w":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
  
        case "a":
          var audio1 = new Audio("sounds/kick-bass.mp3");
          audio1.play();
          break;
  
        case "s":
          var audio2 = new Audio("sounds/snare.mp3");
          audio2.play();
          break;
  
        case "d":
          var audio3 = new Audio("sounds/tom-1.mp3");
          audio3.play();
          break;
  
        case "j":
          var audio4 = new Audio("sounds/tom-2.mp3");
          audio4.play();
          break;
  
        case "k":
          var audio5 = new Audio("sounds/tom-3.mp3");
          audio5.play();
          break;
  
        case "l":
          var audio6 = new Audio("sounds/tom-4.mp3");
          audio6.play();
          break;
  
        default:
         console.log(this.innerHTML)
    
      }
}


//adding some animation to the buttons
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    
    activeButton.classList.add("pressed");

    //using the settime out to remove the class that was added to add animation to the button but again removing
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
    
}





//Testing the clickListener and experinmenting with the callback function 
//here it is a anonymous function which console logs the event details

// var clickableHeading = document.getElementById("title");
// clickableHeading.addEventListener("click",function(event){
//     clickableHeading.innerHTML = "I was Clicked !!";
//     console.log(event);
// })