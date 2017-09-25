var array = [-1, 1, 1, 1];

function countPositives(arr) {
  var counter = 0;
  var length = arr.length;

  for (var i = 0; i < length; i++) {
    if (arr[i] >= 0) {
      counter++;
    }
  }

  arr[length - 1] = counter;

  console.log(arr);
}

countPositives(array);
