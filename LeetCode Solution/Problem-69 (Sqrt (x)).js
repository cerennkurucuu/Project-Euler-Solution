var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }

  let partLeft = 1;
  let partRight = x;

  while (partLeft < partRight) {
    let middle = partLeft + Math.floor((partRight - partLeft) / 2);

    if (middle * middle === x) {
      return middle;
    } else if (middle * middle > x) {
      partRight = middle;
    } else if (middle * middle < x) {
      partLeft = middle + 1;
    }
  }

  return partLeft - 1;
};
