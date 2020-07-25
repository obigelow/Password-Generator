// Assignment Code
var generateBtn = document.querySelector("#generate");

// My random charecters that will be selected from
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowLetters = [];
for (var i = 0; i < capLetters.length; i++) {
   lowLetters[i] = capLetters[i].toLowerCase();
   
}
var numbers = Math.floor(Math.random() * 10);

// pickin amount of characters
var charAmount = prompt("Pick a number of charecters that you would like your password to be. You must pick between 8 - 124 characters.")
charAmount = parseInt(charAmount, 10);

// selecting what characters they want in password
var specialOption = confirm("Would you like special characters?");
var lowlOption = confirm("Would you like lowercase letters?");
var upperOption = confirm("Would you like uppercase letters?");
var numOption = confirm("Would you like numbers?");

console.log(charAmount);

// Write password to the #password input
function generatePassword() {
  if (specialOption === true && lowOption === true && upperOption === true && numOption === true) {
    var password = 

  }
}

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
