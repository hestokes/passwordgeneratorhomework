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
  var passwordLength = parseInt(prompt("Please enter number of characters you want for your password. Must be a number between 8 and 128 characters."));
  while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
     passwordLength = parseInt(prompt("What you entered is invalid. Please enter number of characters you want for your password. Must be a number between 8 and 128 characters."));
  };

  var questionNumbers = confirm("Do you want to include numbers in your password?");
  var questionLowercases = confirm("Do you want to include lowercases?");


  var generatorFunctions = {
    generateNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random()) * 20 + 37);
    }, 
    generateLowercases: function() {
      return String.fromCharCode(Math.floor(Math.random()) * 26 + 37);
    }, 
    generateUppercases: function() {
      return String.fromCharCode(Math.floor(Math.random()) * 26 + 37);
    }, 
    generateSpecialCharacters: function() {
      return String.fromCharCode(Math.floor(Math.random() * 6) + 33);
    },
  };

  var generatedPassword = "";
  
  for (generatedPassword)

  if (questionNumbers) {
    return array.generateNumbers;
  };
  
  else (questionLowercases) {
    return generateLowercases;
  };
  


  
  //make for loop with if else statesments inside and it will use the generator functions (generateNumbers etc..)
  return generatedPassword;
};
//criteria for length
//criteria for character types lower case, upper..etc
//validate that at least one character type was selected
//prints completed password to page and generate to page


// Add event listener to generate button

//next steps figure out how to add the special characters i want to include !@#$% (there will only be five)
//complete return generatePassword; piece, middle bit betwee that and var generatedPassword + "";


