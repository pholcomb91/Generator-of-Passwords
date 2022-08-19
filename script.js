
var passChars= '';

//determines length of password
function displayPasswordLengthPrompt() {
  let passLength = prompt("How long would you like your password to be?",8);
  console.log("my password length", passLength)
  if ((passLength>= 8) && (passLength<= 128)) {
    
  } else {
    alert("Must be a number between 8 and 128");
    passLength=8;
  }
  console.log (passLength);
  return passLength;
}

//This is returning whether or not they want to include Upper Case characters
function displayUpperCasePrompt() {
  let passUpperCase=confirm("Would you like to include Upper Case letters? Click cancel for NO")
  if (passUpperCase == true) {
    passChars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    alert("GOT IT, THANKS.")
    } else {
      alert("no capitals will be included.")
      passChars='';
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

//this is asking about special characters
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
  //This runs the below functions to gather user input
  let passLength = displayPasswordLengthPrompt();
  displayUpperCasePrompt();
  displayLowerCasePrompt();
  displayNumbersPrompt();
  displaySpecialCharactersPrompt();
  //this spits out the password using the given parameters
  var password = '';
  console.log("passLength", passLength)
  for (var i = 0; i <= passLength-1; i++) {
    var randomNumber = Math.floor(Math.random() * passChars.length);
    console.log ("random num= ", randomNumber);
    password += passChars.substring(randomNumber, randomNumber +1);
  }
   console.log("password=", password);
   document.getElementById("password").innerHTML = password;

}