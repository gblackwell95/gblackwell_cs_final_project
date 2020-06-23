"use strict";

//2                     anonymous self-invoking function
window.onload = function () {
    //setting up buttons                6 a) create and append link
    var pageStyle = document.createElement("link");
    //                                  6 b) seperate css page named ss_insert.css
    pageStyle.setAttribute("href", "ss_insert.css");
    pageStyle.setAttribute("rel", "stylesheet");
    pageStyle.setAttribute("disabled", "disabled");

    document.head.appendChild(pageStyle);

    pageStyle.disabled = true;

    var buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("id", "styleButtons");

    var lightButton = document.createElement("input");
    lightButton.setAttribute("type", "button");
    lightButton.setAttribute("value", "Light View");
    var darkButton = document.createElement("input");
    darkButton.setAttribute("type", "button");
    darkButton.setAttribute("value", "Dark View");

    buttonDiv.appendChild(lightButton);
    buttonDiv.appendChild(darkButton);

    insertAfter(buttonDiv, document.getElementById("navList"));

    var buttonStyles = document.createElement("style");

    document.head.appendChild(buttonStyles);

    //                                              11. insertRule() method
    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "div#styleButtons{clear: left;}", 0);

    lightButton.onclick = function () {
        pageStyle.disabled = true;
    }
    darkButton.onclick = function () {
        pageStyle.disabled = false;
    }

    //setting up clock
    var divClock = document.createElement("div");
    divClock.setAttribute('id', 'clock');
    divClock.style.clear = 'left';
    divClock.style.float = 'left';
    divClock.style.display = 'block';
    divClock.style.paddingLeft = '50px';
    document.getElementById("vertNav").insertBefore(divClock, document.getElementById("navList"));
    //4 c) timer
    setInterval(updateClock, 1000);
}
//updating clock        named function
function updateClock() {
    //getting current time
    //                      7. using date to display date and time
    var currentTime = new Date();

    //getting date, hours, minutes, and seconds
    var month = currentTime.getMonth();
    var day = currentTime.getDate();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    //adding a leading 0 if the minutes or seconds are < 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    //displaying AM or PM
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    //Formatting to a 12 hour clock
    currentHours = (currentHours == 0) ? "12" : currentHours;
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    var currentTimeString = month + "/" + day + "\r\n" + currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    document.querySelector("#clock").textContent = currentTimeString;
}
//                                              function expression
 var insertAfter = (newNode, existingNode) => {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

//4 a) mouse event                                                  
document.getElementById("contactBtn").addEventListener("mousedown", createForm);

//named function
function createForm() {
    //                                          10. using 3 elements to make a form
    var form = document.getElementById("contactMe");
    form.removeChild(document.getElementById("contactBtn"));
    var emailLabel, nameLabel, messageLabel, email, name, message, submit;
    nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerText = "Name: ";
    name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("required", "required")
    form.appendChild(nameLabel);
    form.appendChild(name);

    emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.innerText = "Email: ";
    email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("required", "required")
    form.appendChild(emailLabel);
    form.appendChild(email);

    messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "name");
    messageLabel.innerText = "Words: ";
    message = document.createElement("textarea");
    message.setAttribute("type", "text");
    message.setAttribute("required", "required");
    message.setAttribute("maxlength", "100");
    message.setAttribute("placeholder", "Write message here");
    form.appendChild(messageLabel);
    form.appendChild(message);

    submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    form.appendChild(submit);
}