var array = [1, 2, 3, 4, 5, 6];

function printReturn(arr) {
  length = arr.length;

  console.log(arr[length - 2]);

  for (var i = 0; i < length; i++) {
    if (arr[i] % 2 !== 0) {
      return arr[i];
    }
  }
}

printReturn(array);
