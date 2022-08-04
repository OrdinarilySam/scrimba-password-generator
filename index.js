const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowlets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const uplets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const syms = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const btnEl = document.querySelector("#btn-el")
const numsEl = document.querySelector("#num-el")
const symsEl = document.querySelector("#syms-el")
const upletsEl = document.querySelector("#uplets-el")
const lowletsEl = document.querySelector("#lowlets-el")


btnEl.addEventListener('click', function() {
    console.log("clicked")
})

function generatePassword() {
    let chars = []
    if(numsEl.checked) {
        chars += nums
    }
    if(symsEl.checked) {
        chars += syms
    }
    if(uplets.checked) {
        chars += uplets
    }
    if(lowlets.checked) {
        chars += lowlets
    }
    if(chars.length<1) return
    

}