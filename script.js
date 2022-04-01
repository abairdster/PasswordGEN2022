var ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var ["0","1","2","3","4","5","6","7","8","9"]
var [","|",","!","#","$","%","&","()","*","+","-",".","/","`"~"]

if (var i = 0; i < password.length; i++) {
  console.log("Is length of at least 8 characters and no more than 128 characters")
}
System.out.println("RESULTS=" + Arrays.toString(results));

object.onclick = function(){myScript};

function CheckPassword(inputtxt) {
}
var password = [ "/,^,[,A-Z,a-z,],\,w,{0,9},$,/,;"]
if(inputtxt.value.match(passw)) 
{ 
  alert('Correct') return true;
}
else
{ 
alert('Wrong')
return false;
}
function calculateArea() {

  var base = document.getElementById('width').value;
  var height = document.getElementById('height').value;
  var out = (1/2) * parseFloat(base) * parseFloat(height);
  
  document.output.value = out;
  result = window.prompt(message, default);

  let sign = prompt("What's your Password");

  if (sign.toLowerCase() == "a-z") {
    alert("Includes Lowercase");
  }
  if (sign.toUpperCase() == "A-Z") {
      alert("Includes Uppercase");
  }
  if (sign.toNumeric() == "0-9") {
        alert("Includes Numeric");
  }      
if (sign.toSpecialCharacter() = ","{","|","}",""!","#","$","%","&","()","*","+","-",".","/","`"~")
          alert("Includes lowercase");

          var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#&()*+-./`~";
          var string_length = 8-128;
          var randomstring = '';
          for (var i=0; i<string_length; i++) {
              var rnum = Math.floor(Math.random() * chars.length);
              randomstring += chars.substring(rnum,rnum+1);
          }

          #include <iostream>
          #include <algorithm>
          using namespace std;
          
          void WorkoutPass(int ,int,int);
          
          int passlength;
          int specChar;
          int number;
          
          
          int main()
          {
              cout << "Enter the length of password: ";
              cin >> passlength;
          
          
          if (passlength > 0)
          {
                  cout << "Enter the amount of special characters: ";
                  cin >> specChar;
                  if (specChar > passlength)
                  {
                      cout << "Error - invalid value entered is above the length of password";
                  }
                  cout << "Enter amount of numbers";
                  cin >> number;
                  if (number > passlength)
                  {
                      cout << "Error - invalid value entered is above the length of password";
                  }
                  WorkoutPass(passlength, specChar, number);
          
          }
          else
          {
              cout << "Error - invalid value entered password must be above zero";
          }
          return 0;
          }
          
          
          void WorkoutPass(int p, int s, int n)
          {
          string password;
          
          char alphaBetArray[26] = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
          char specCharArray[10] = {'!','£','$','%','&','@','~','#','>','<'};
          char numberArray[10] = {'1','2','3','4','5','6','7','8','9','10'};
          
          
          int numberOfLetters = p - s - n;
          
          
         printCharNum letter;        


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
