"use strict";

/*
   Name: Garret Blackwell
   Filename: resume_outline.js
*/

//window.addEventListener("load", createResumeNav);
//jquery
$(document).ready(function() {

    $("#pic").on("click", function() {
        window.location.replace("index.html");
    })

    var mainHeading = document.createElement("h1");
    var outlineList = document.createElement("ol");
    var headingText = document.createTextNode("Outline");

    mainHeading.appendChild(headingText);
    outline.appendChild(mainHeading);
    outline.appendChild(outlineList);

    createList(outlineList);    
})

function createList(outlineList) {
    for (let index = 1; index <= 4; index++) {
        var listElem = document.createElement("li");
        var linkElem = document.createElement("a");
        linkElem.innerHTML = document.getElementById("head" + index).innerHTML;
        linkElem.setAttribute("href", "#head" + index);
        listElem.appendChild(linkElem);
        outlineList.appendChild(listElem);
    }
}

