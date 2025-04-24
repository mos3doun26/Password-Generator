const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
    "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

// locate elements.
let firstPlaceEl = document.getElementById("first-place");
let secondPlaceEl = document.getElementById("second-place");

// password object
let password = {
    length: 15,
    hasCharactersandNums: true
}

// variables
numOfPasswords = 2
passwords = []

// generate passwords function
function generatePasswords() {
    let range = characters.slice()
    if (!password.hasCharactersandNums) {
        range = characters.slice(0, characters.indexOf("z"))
    }
    // creating 2 passwords
    for (let i = 0; i < 2; i++) {
        let createdPass = ""
        // loop to create each password
        for (let j = 0; j < password.length; j++) {
            // random number from 0 to the last index of the range.
            let randIndex = Math.floor(Math.random() * range.length)
            createdPass += range[randIndex]
        }
        passwords.push(createdPass)
        console.log(createdPass)
    }

    // adding the generated passwords to html
    firstPlaceEl.textContent = passwords[0]
    secondPlaceEl.textContent = passwords[1]

}