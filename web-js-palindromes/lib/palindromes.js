function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("").split(" ").join("");
  return s.split(" ").join("") == stringReverse;
}

module.exports = isPalindrome;
