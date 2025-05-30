const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
    "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

// locate elements.
let firstPlaceEl = document.getElementById("first-place");
let secondPlaceEl = document.getElementById("second-place");
let textmesssageEl = document.getElementById("text-copied-message")

// set password object
let password = {
    length: 15,
    hasCharactersandNums: true
}

document.getElementById("generate-pass").addEventListener("click", function () {

    firstPlaceEl.textContent = ""
    secondPlaceEl.textContent = ""
    // logic of creating passwords and representing them
    let firstPass = generatePassword()
    let secondPass = generatePassword()
    // show the passwords.
    firstPlaceEl.textContent = firstPass
    secondPlaceEl.textContent = secondPass
})


// generate reandom password funciton

function generatePassword() {
    textmesssageEl.innerText = ""
    // create range of the password based on password has characters and numbers or not.
    let range = characters.slice()
    if (!password.hasCharactersandNums) {
        range = characters.slice(0, characters.indexOf("z"))
    }

    let generatedPass = ""
    for (let i = 0; i < password.length; i++) {
        let randIndex = Math.floor(Math.random() * range.length)
        generatedPass += range[randIndex]
    }
    return generatedPass
}


// Switch dark and light.

// locate toggle button
let toggleBtn = document.getElementById("dark-light-toggle")
// get current theme
let currentTheme = document.querySelector("html").getAttribute("data-theme");

document.getElementById("dark-light-toggle").addEventListener("click", function () {
    // create the new theme
    let newTheme = currentTheme === "light" ? "dark" : "light";
    // change the text of the button
    let newText = newTheme === "light" ? "Dark" : "Light";
    toggleBtn.innerText = newText

    // set the new theme in data-them attribute in html
    document.querySelector("html").setAttribute("data-theme", newTheme)
    // save the them in the local storage.
    localStorage.setItem("theme", newTheme)
    currentTheme = newTheme
})

// Initialize theme on page load
let savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.querySelector("html").setAttribute("data-theme", savedTheme);
    currentTheme = savedTheme;
    toggleBtn.innerText = savedTheme === "light" ? "Dark" : "Light";
}


// copy password.
function copy(elementId) {

    let element = document.getElementById(elementId)

    navigator.clipboard.writeText(element.textContent)
    showCopiedMessage()

}


//
function showCopiedMessage() {
    textmesssageEl.textContent = "Password is copied!"
    setTimeout(hide, 2000)
}

function hide() {
    textmesssageEl.textContent = ""
}