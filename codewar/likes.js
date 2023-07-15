let string = "testCase";
let result = "";

for (let i = 0; i < string.length; i++) {
  if (i !== 0 && string[i] === string[i].toUpperCase()) {
    result += " " + string[i];
  } else {
    result += string[i];
  }
}
console.log(result);
// ----------------------------
function links(names) {
  // if(names.length === 0 || (names.length === 1 && names[0]==="")){
  //     return "no one likes this"
  // }
  // if(names.length === 1){
  //     return `${names[0]} likes this`
  // }
  // if(names.length === 2){
  //     return `${names[0]} and ${names[1]} likes this`
  // }
  // if(names.length === 3){
  //     return `${names[0]}, ${names[1]} and ${names[2]} likes this`
  // }
  // if(names.length > 3){
  //     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  // }

  // switch (names.length) {
  //     case 0:
  //       return "no one likes this";
  //     case 1:
  //       return `${names[0]} likes this`;
  //     case 2:
  //       return `${names[0]} and ${names[1]} like this`;
  //     case 3:
  //       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  //     default:
  //       return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  //   }

  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}
console.log(links([]));
console.log(links(["Peter"]));
console.log(links(["Jacob", "Alex"]));
console.log(links(["Max", "John", "Mark"]));
console.log(links(["Max", "John", "Mark", "Max"]));

/**
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 */
