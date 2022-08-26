function isPalindrom(word){
    for(let i = 0; i < word.length; i++){
    for(let j = word.length - 1; i >= 0; i--){
      if (word[i] === word[j]){
        return true
      } else return false
    }
  }
  
  }

  // other way

  function isPaldindrome(word){
    let j = word.length - 1;
    for (let i = 0; i < word.length / 2; i++){
        if (word[i] !== word[j]){
            return false
        }
        j--
    }
    return true
  }