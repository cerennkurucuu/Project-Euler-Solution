var isPalindrome = function (x) {
  var palindromX = x;
  var reversedX = 0;

  while (palindromX > 0) {
    var right = Math.floor(palindromX % 10);
    reversedX = reversedX * 10 + right;
    palindromX = Math.floor(palindromX / 10);
  }

  if (x == reversedX) return true;
  else return false;
};
