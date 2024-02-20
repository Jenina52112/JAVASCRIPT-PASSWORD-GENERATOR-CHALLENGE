
// Assignment code here
var lowerC = "abcdefghijklmnopqrstuvwxyz";
var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numC = "1234567890";
var specialC = "!@#$%^&*()_-+=`~{}[]:;<,>.?/";
var allChar = lowerC.concat(upperC).concat(numC).concat(specialC);
var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  var password = ('');
  var userLength
  var lengthAlert
  

userLength = +prompt("How long would you want your password to be?")
  if (userLength <8 || userLength >128){
    do {
    lengthAlert = +prompt("at least 8 characters and no more than 128 characters");
    userLength = lengthAlert;
    } 
    while (lengthAlert >= 129 || lengthAlert <= 7)};
    console.log(userLength);
    console.log(typeof userLength);

  var lowerCase = confirm("Do you want to include lowerCase?")
   console.log(lowerCase)
  
  var upperCase = confirm("Do you want to include upperCase?")
   console.log(upperCase);

  var numCase = confirm("Do you want to include numbers?")
   console.log(numCase);

  var specChars = confirm("Do you want to include special characters");
   console.log(specChars)
  
  var selectedChars = ('');
    selectedChars += lowerCase ? lowerC : " ";
    selectedChars += upperCase ? upperC : " ";
    selectedChars += numCase ? numC : " ";
    selectedChars += specChars ? specialC : " ";
      if (selectedChars == 0)
      {
        alert("Must select at least 1 set of characters!")
      };
      
      

  for(var i = 0; i < userLength; i++)
    {
    randomSelected = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars[randomSelected]
    }

  var passwordText = document.querySelector("#password");
    passwordText.value = password;
    console.log(password); 
  
}

// Write password to the #password input
function writePassword() 
{
  password
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
