function findTheLongestWord(statement) {
    const words = statement.split(' ');
    let longestWords = "";
    for (let i = 0; i < words.length; i++) {
        if(words[i].length > longestWords.length){
            longestWords = words[i];
        }        
    }
    return longestWords;
}

function findLongestWordImproved(sentence) {
    const words = sentence.split(' ');
    
    return words.reduce((longestWord, currentWord) => {
      return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, '');
  }
  
console.log(findTheLongestWord("If you don't take risks, you can't create a future."));