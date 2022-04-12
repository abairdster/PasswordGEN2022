//  user clicks generate password button
// add event listener to button click 
// call generate password function

// user submits password parameters to
//  promtps, confirms, and/or alerts  
    // store all possible characters for password parameters
    
    // for loop for the the number of times as the password length
      //grab a random character each cycle
      // store the random character in password variable

// user sees password
  // return the password


  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const specials = [",", ",", "!", "#", "$", "%", "&", "()", "*", "+", "-", ".", "/", "`"]
function generatePassword() {
  
  var piggyBank = []

  var password = []
  var lengthOfPassword = prompt("pick length 8-128")

  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("pick 8-128 please")
    } else {
    var askForUpperCase = confirm("Please add Uppercase letters to your password")

    if (askForUpperCase) {
      //spread operator
      piggyBank.push(...upperCase)
    }

    var askForLowerCase = confirm("Please add Lowercase letters to your password")

    if (askForLowerCase) {
      piggyBank.push(...lowerCase)
    }

    var askForNumeric = confirm("Please add Numbers to your password")

    if (askForNumeric) {
      piggyBank.push(...numeric)
    }

    var askForSpecials = confirm("Please add Special characters to your password")

    if (askForSpecials) {
      piggyBank.push(...specials)
    }

     for (var i = 0; i <lengthOfPassword; i++) {
      password.push(piggyBank[Math.floor(Math.random() * piggyBank.length)]);

     }
     //Display password on screen

     }
     console.log(password)
     return password.join("");
    
}

  
  //Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");

  //Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  //Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);



