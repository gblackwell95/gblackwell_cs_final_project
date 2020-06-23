"use strict";

window.onload = welcome();

function welcome() {
    var welcome = document.createElement("h1");
    welcome.setAttribute("id", "welcome")
    welcome.innerText = "Welcome to my website! Press space to continue";
    document.body.appendChild(welcome);
    window.onkeydown = function() {
        if(event.keyCode == 32) {
            setTimeout(aboutMe, "2000");
        }
    }
}
function aboutMe() {
    document.body.removeChild(document.getElementById("welcome"));
    var titleAboutMe = document.createElement("h1");
    var pAboutMe = document.createElement("p");
    titleAboutMe.innerText = "About Me";
    document.body.appendChild(titleAboutMe);
    pAboutMe.innerText = "Hello, my name is Garret Blackwell. After working for roughly five years after highschool, \
    I decided to go back to school to pursue a degree in computer science.";
    document.body.appendChild(pAboutMe);
}