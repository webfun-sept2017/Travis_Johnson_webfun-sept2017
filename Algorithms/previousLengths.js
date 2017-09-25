var array = ["this", "are", "hello"];

function previousLengths(arr) {
  var arrLength = arr.length;

  var newArray = [];

  for (var i = 0; i < arrLength; i++) {
    if (i === 0) {
      length = arr[arrLength - 1].length;
      newArray.push(length);
    } else {
      length = arr[i - 1].length;
      newArray.push(length);
    }
  }

  return newArray;
}

previousLengths(array);
