
var finalCount = {};

function countingLetters (str) {
  var noSpaces = str.split(' ').join('');
  for (var i = 0; i < noSpaces.length; i++) {
    finalCount[noSpaces[i]] ? finalCount[noSpaces[i]] += 1 : finalCount[noSpaces[i]] = 1;
  }
  return finalCount;
};

console.log(countingLetters('lighthouse in the house'));
