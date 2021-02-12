
// Assignment code here
function generateTextForPassword(useLowercase, useUppercase, useNumbers, useSpecialchars, userLength) {
  //arrays of lowercase
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //arrays of uppercase 
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //arrays of numerics 
  var numerics = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //arrays of special characters 

  var specialcharacters = ['!', '"', "#", "$", "%", "&", "'", "(", ")",
    "*", "+", ",", "-", ".", "/", ':', ';', '<', "=", ">", "?", "@",
    "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];

  var passwordText = "";

  var options = [];
  if (useLowercase) {
    options = options.concat(lowercase);
  }
  if (useUppercase) {
    options = options.concat(uppercase);
  }
  if (useNumbers) {
    options = options.concat(numerics);
  }
  if (useSpecialchars) {
    options = options.concat(specialcharacters)
  }


  for (let i = 0; i < userLength; i++) {

    let randomOptions = options[Math.floor(Math.random() * options.length)];
    console.log(randomOptions);
    passwordText += randomOptions;
  }


  return passwordText;
}

function generatePassword() {
  // Choosing the length of passcode. When user chooses a number that will be the length 
  var userLength = Number(prompt("Choose the length of your new password, please ENTER a number beween 8 and 128"));

  if (userLength < 8 && userLength > 128) {
    window.alert("This is invaild, please choose a number between 8 - 128");
  }

  else {
    //alert for choosing lowercase, uppercase, numerics and special characters
    var useLowercase = confirm(" Use Lowercase letters? ");
    var useUppercase = confirm(" Use Uppercase letters?");
    var useNumbers = confirm("Use Numbers?");
    var useSpecialchars = confirm("Use Special Characters?");


    return generateTextForPassword(useLowercase, useUppercase, useNumbers, useSpecialchars, userLength);
  }
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//after final prompt then password is generated
//generated password displays in the box

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
