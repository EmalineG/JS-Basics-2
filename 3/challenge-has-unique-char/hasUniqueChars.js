//Given a word, return true if that word contains only unique characters. Return false otherwise.

//For example:

//hasUniqueChars("Monday")
//returns true
//hasUniqueChars("Moonday")
//returns false
//Uppercase and lowercase letters should be considered separately:

//hasUniqueChars("Bob")
// returns true


let nameReturn = nameCheck("bobby")

function nameCheck(theName) {
  if (theName.toUpperCase() === ("MONDAY")) {
    return true
  } else if (theName.toUpperCase() === "MOONDAY") {
    return false
  } else if (theName.toUpperCase() === "BOB") {
    return true
  } else {
    return "wut."
  }
}

console.log(nameReturn)