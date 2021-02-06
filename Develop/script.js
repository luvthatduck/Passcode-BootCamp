//arrays of lowercase
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//arrays of uppercase 
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//arrays of numerics 
var numerics = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//arrays of special characters 
var specialcharacters = [ '!', '"', "#", "$", "%", "&", "'", "(", ")",
 "*", "+", ",", "-", ".", "/", ':', ';', '<', "=", ">", "?", "@", 
 "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", ];


// Assignment code here
console.log("hello world");
function generatePassword() {
  var result = ""

  // result = window.alert(" You rock!")
  window.alert(" Hello! You need a new secure password.");
  // Choosing the length of passcode. When user chooses a number that will be the length 

  var userLength =
    window.prompt(" Choose the length of your new password, please ENTER a number beween 8 and 128 ") 
      // log.console("userLength");
      if (userLength < 8 || userLength > 128) {
    window.alert("This is invaild, please choose a number between 8 - 128");
  }
  else {
    //alert for choosing lowercase, uppercase, numerics and special characters
    window.alert(" Use lowercase, uppercase, numerics and special characters?");
    //alert validating their choices
    window.alert(" Your passcode will use " + userLength + " characters including lowercase, uppercase, numerics and special characters.");
  }





// generate password is = a random answer with USERLENGTH amount including 0-9, a-z, A-Z, " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "
// answer will show up in the box 


return result
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //after final prompt then password is generated

  //generated password displays in the box

}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
