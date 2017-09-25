var array = [-1, 3, 5, -5];

function biggieSize(arr) {
  length = arr.length;

  for (var i = 0; i < length; i++) {
    if (arr[i] >= 0) {
      arr[i] = "big";
    }
  }
  console.log(arr);
}

biggieSize(array);
