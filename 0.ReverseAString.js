function reverseString(str) {
  return str.split("").reverse().join("");
}
// effecient in term of space

function reverseStringImproved(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }

  return reversed;
}

console.log(reverseString("luffy"));
