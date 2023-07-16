function topThreeWords(text) {
    const wordMap = new Map();
    const wordArray = text
      .toLowerCase()
      .match(/[a-z]+(?:'[a-z]+)*/g) || [];
  
    wordArray.forEach((word) => {
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    });
  
    return Array.from(wordMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map((entry) => entry[0]);
}
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));