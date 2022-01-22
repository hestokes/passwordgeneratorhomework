// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); 

// Write password to the #password input
function writePassword() {
  console.log("password button works");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
function generatePassword() {
  var passwordLength = parseInt(prompt("Please enter number of characters you want for your password. Must be between 8 and 128 characters."));
  // while( )
};
//criteria for length
//criteria for character types lower case, upper..etc
//validate that at least one character type was selected
//prints completed password to page and generate to page


// Add event listener to generate button


