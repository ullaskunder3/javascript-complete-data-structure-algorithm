function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
if (!Array.prototype.unique) {
  Array.prototype.unique = function () {
    return this.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  };
}

function removeDuplicatesPolly(arr) {
  return arr.unique();
}

console.log(
  removeDuplicates([
    "Monkey D. Luffy",
    "Roronoa Zoro",
    "Nami",
    "Usopp",
    "Monkey D. Luffy",
    "Sanji",
    "Tony Tony Chopper",
    "Nico Robin",
  ])
);
