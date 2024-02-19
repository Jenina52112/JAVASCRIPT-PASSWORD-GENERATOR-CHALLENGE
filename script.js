// Assignment code here

var lowerC = "abcdefghijklmnopqrstuvwxyz";
var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numC = "1234567890";
var specialC = "!@#$%^&*()_-+=";
var allChar = lowerC.concat(upperC).concat(numC).concat(specialC);

//var numbersLetters = lowerC.concat(numC);


//computer guess(random numbers for letters and numbers)
var letterLower = Math.floor(Math.random() * lowerC.length);
var letterUpper = Math.floor(Math.random() * upperC.length);
var numnumC = Math.floor(Math.random() * numC.length);
var specChars = Math.floor(Math.random() * numC.length);

//random picks by computer
var randLower = lowerC[letterLower];
var randUpper = upperC[letterUpper];
var randNum = numC[numnumC];
var randSpecial = specialC[specChars];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(lowerCase, upperCase, specChars, userLength)
{
//filter whats included
var numOptions = lowerCase + upperCase + specChars + userLength;
console.log(numOptions);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(randLower, 
                                  randUpper, 
                                  randNum, 
                                  randSpecial,
                                  userLength);
  var passwordText = document.querySelector("#password");


  var userLength
  var lengthAlert

userLength = prompt("How long would you want your password to be?")
if (userLength <8 || userLength >129){
  do {
    lengthAlert = prompt("at least 8 characters and no more than 128 characters");
  } while (lengthAlert >= 129 || lengthAlert <= 7)};
  // console.log(userLength);

  
  var lowerCase = confirm("Do you want to include lowerCase?")
  console.log(lowerCase)
  if(lowerCase == true){
    passwordText += letterLower
  }

  
  var upperCase = confirm("Do you want to include upperCase?")
  console.log(upperCase);

  
  var specChars = confirm("Do you want to include special characters");
  console.log(specChars)

  
  


  passwordText.value = password;
  

  
}

writePassword
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
