// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password")

// My random charecters that will be selected from
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowLetters = [];
for (var i = 0; i < capLetters.length; i++) {
   lowLetters[i] = capLetters[i].toLowerCase();
   
}
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// random characters
var charAmount;
var specialOption;
var lowOption;
var upperOption;
var numOption;

// pickin amount of characters
generateBtn.addEventListener("click", function () {

charAmount = prompt("Pick a number of charecters that you would like your password to be. You must pick between 8 - 124 characters.")
charAmount = parseInt(charAmount, 10);
if (charAmount < 8 || charAmount > 124) {
  alert ("oops, thats not the correct amount of charecters")
  return;
}
specialOption = confirm("Would you like special characters?");
lowOption = confirm("Would you like lowercase letters?");
upperOption = confirm("Would you like uppercase letters?");
numOption = confirm("Would you like numbers?");
generatePassword();

});




// Write password to the #password input
  function generatePassword() {

    var randArray = [];

      if (specialOption === true) {
        randArray = randArray.concat(specialChar)
        var passwordString = "";
        for (var i = 0; i < charAmount; i++) {
          passwordString += randArray[Math.floor(Math.random() * randArray.length)];
          password.textContent = passwordString;
        } 
      } 
      if (lowOption === true) {
        randArray = randArray.concat(lowLetters)
        var passwordString = "";
        for (var i = 0; i < charAmount; i++) {
          passwordString += randArray[Math.floor(Math.random() * randArray.length)];
          password.textContent = passwordString;
        } 
      } 
      if (upperOption === true) {
        randArray = randArray.concat(capLetters)
        var passwordString = "";
        for (var i = 0; i < charAmount; i++) {
          passwordString += randArray[Math.floor(Math.random() * randArray.length)];
          password.textContent = passwordString;
        } 
      } 
      if (numOption === true) {
        randArray = randArray.concat(numbers)
        var passwordString = "";
        for (var i = 0; i < charAmount; i++) {
          passwordString += randArray[Math.floor(Math.random() * randArray.length)];
          password.textContent = passwordString;
        } 
      } 
  }


