var passChars= '';

//determine length of password


function displayPasswordLengthPrompt() {
  let passLength = prompt("How long would you like your password to be?",8);
  console.log("my password length", passLength)
  if ((passLength>= 8) && (passLength<= 128)) {
    
  } else {
    alert("Must be a number between 8 and 128");
    
  }
  console.log (passLength);
  return passLength;
}
  //this needs to loop?<-------------------------------------------------*/
 
  

//This is returning whether or not they want to include Upper Case characters
function displayUpperCasePrompt() {
  let passUpperCase=confirm("Would you like to include Upper Case letters? Click cancel for NO")
  if (passUpperCase == true) {
    passChars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    alert("GOT IT, THANKS.")
    } else {
      alert("no capitals will be included.")
    }
  console.log (passChars)
  return passUpperCase;
}
//This is returning whether or not they want to include Lower Case characters
function displayLowerCasePrompt() {
  let passLowerCase=confirm("Would you like to include Lower Case letters? Click cancel for NO")
  if (passLowerCase == true) {
    alert("terrific!")
    passChars+= 'abcdefghijklmnopqrstuvwxyz';
    } else {
      alert("NO LOWER CASE LETTERS WILL BE INCLUDED.")
    }
    console.log (passChars);
  return passLowerCase;
}
//This will return whether or not they want to include numbers in their password
function displayNumbersPrompt() {
  let passNumbers=confirm("Would you like to include Numbers? Click cancel for NO")
  if (passNumbers == true) {
    alert("Phen0mena1, a1mo5t d0ne.")
    passChars+= '0123456789';
    } else {
      alert("Not even one number will be included.")
    }
    console.log (passChars);
  return passNumbers;
}

function displaySpecialCharactersPrompt() {
  let passSpecialCharacters=confirm("Lastly, would you like to include special characters? Click cancel for NO")
  if (passSpecialCharacters == true) {
    alert("YE@H!!!Here it come$!")
    passChars+= '~!@#$%^&*()_+=';
    } else {
      alert("lame characters only.")
    }
  console.log(passChars);
  return passSpecialCharacters;
}
// entry point
function displayContent() {
  //This runs the below functions
  let passLength = displayPasswordLengthPrompt();
  displayUpperCasePrompt();
  displayLowerCasePrompt();
  displayNumbersPrompt();
  displaySpecialCharactersPrompt();
  //this spits out the password using the given parameters
  var password = '';
  console.log("passLength", passLength)
  for (var i = 0; i <= passLength; i++) {
    var randomNumber = Math.floor(Math.random() * passChars.length);
    console.log ("random num= ", randomNumber);
    password += passChars.substring(randomNumber, randomNumber +1);
  }
   console.log("password=", password);
   document.getElementById("password").innerHTML = password;

}
  

//2 show text field

//3 get button on prompt (gen password btn to take variable and insert it.)

//4 dismiss prompt window on submittion
//5 display randomly generated box


/* Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("open window.prompt");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}
function generatePassword() {
  /*var passLength= document.getElementById(numOfChars);
  var passUpperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passLowerCase= "abcdefghijklmnopqrstuvwxyz";
  var passNumber= 0123456789;
  /*var passSpecialCharacters= Boolean(True);

  let passLengthPrompt = prompt("Please enter the length you would like your password to be", 8);
  /*if (passLength >= 8) {
    numOfChars= 'result';
  } else { alert("Must be at least 8 characters.");
  }
  /*if passLowerCase () {


  }
  if passUpperCase () {

  }

  return 


Add event listener to generate button
generateBtn.addEventListener("click", writePassword){};*/