// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// String
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var symbol = "~!@#$%^&*()<>?";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword () {
  var actualPassword = "";
  

  var requiredChar = "";


  // Prompt  
  var length = prompt("Please enter a number!")
    while (length < 8 ||length > 128) {
      length = prompt("You need at least 8 character and no more than 128");
    }

  // Confirm Lowercase  
  var confirmLc = confirm("Would you lowercase letters?"); 
    if (confirmLc) {
      requiredChar = requiredChar.concat(lowerCase);
    }
    
  // Confirm Uppercase    
  var confirmUc = confirm("Would you like uppercase letters?");
    if (confirmUc) {
      requiredChar = requiredChar.concat(upperCase);
    }

  // Confirm Numbers  
  var confirmNum = confirm("Would you like numbers?");
    if (confirmNum) {
      requiredChar = requiredChar.concat(num);
    }

  // Confirm Symbols  
  var confirmSymbol = confirm("Would you like special characters?");
    if (confirmSymbol) {
      requiredChar = requiredChar.concat(symbol);
    }
  

 for (var i = 0; i < length; i++) {
   var random = Math.floor(Math.random() * requiredChar.length);

   actualPassword = actualPassword.concat(
     requiredChar.charAt(random)
   );
 }

return actualPassword;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
