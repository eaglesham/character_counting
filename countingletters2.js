
var finalCount = {};

function countingLetters (str) {
  var noSpaces = str.split(' ').join('');
  for (var i = 0; i < noSpaces.length; i++) {
    !finalCount[noSpaces[i]] ? finalCount[noSpaces[i]] = [i] : finalCount[noSpaces[i]].push(i);
  }
  return finalCount;
};

console.log(countingLetters('lighthouse in the house'));

var i = []
