const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowlets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const uplets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const syms = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const checkChars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "~`!@#$%^&*()_-+={[}],|:;<>.?/"]
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const btnEl = document.querySelector("#btn-el")
const lengthPicker = document.querySelector("#length-picker")

const password1 = document.querySelector("#password-1")
const password2 = document.querySelector("#password-2")

const message1 = document.querySelector("#message1")
const message2 = document.querySelector("#message2")

const r = document.querySelector(":root")
const rs = getComputedStyle(r)


btnEl.addEventListener('click', function() {
    message1.style.color = "transparent"
    message2.style.color = "transparent"
    pass1 = generatePassword()
    pass2 = generatePassword()
    password1.textContent = pass1
    password2.textContent = pass2
})

function generatePassword() {
    let count = 0
    while (true) {
        count++
        console.log("Attempt number", count)
        password = ""
        for (let i = 0; i < lengthPicker.value; i++) {
            password += characters[Math.floor(Math.random() * characters.length)]
        }
        if (checkPassword(password)) return password
    }
}

function checkPassword(pw) {
    let isValid = false
    for(let str of checkChars) {
        isValid = false
        for(let char of pw){
            if(str.indexOf(char)>=0){
                isValid = true
            }
        }
        if(!isValid) return false
    }
    return true
}

password1.addEventListener("click", function() {
    message2.style.color = "transparent"
    navigator.clipboard.writeText(password1.textContent)
    message1.style.color = rs.getPropertyValue("--desc-mode")
})
password2.addEventListener("click", function() {
    message1.style.color = "transparent"
    navigator.clipboard.writeText(password2.textContent)
    message2.style.color = rs.getPropertyValue("--desc-mode")
})