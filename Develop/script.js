// variables of lowercase
//variables of uppercase 
//variables of numerics 
//variables of special characters

// Assignment code here
console.log("hello world");
function generatePassword() {
  var result = ""
  // result = window.alert(" You rock!")
  window.alert(" Hello! You need a new secure password.");
 // Choosing the length of passcode. When user chooses a number that will be the length 
  window.prompt( " Choose the length of your new password, please ENTER a number beween 8 and 128 ");
  var userLength = window.prompt( " Choose the length of your new password, please ENTER a number beween 8 and 128 ");
  // log.console("userLength");
  if ( userLength is < 8 || userLength > 128) {
    window.alert("This is invaild, please choose between 8 - 128");
  }

//alert for choosing lowercase, uppercase, numerics and special characters
//alert validating their choices
//after final prompt then password is generated
//generated password displays in the box

  return result
}

// function passwordLength() {
//   window.alert(" Hello! You need a new secure password. Do you wish to continue?");
//   window.prompt( " Let's choose the length of your new password. Please ENTER a number beween 8 and 128 ");
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
