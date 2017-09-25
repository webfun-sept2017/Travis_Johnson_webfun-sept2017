var array = [1, 2, 3, 4, 5];

function addSeven(arr) {
  var arrLength = arr.length;
  var newArray = [];

  for (var i = 0; i < arrLength; i++) {
    if (i === 0) {
      continue;
    } else {
      v = arr[i] + 7;
      newArray.push(v);
    }
  }

  console.log(newArray);
}
addSeven(array);
