var array = [1, 3, 5, 7, 9, 13];

function greaterThanSecond(arr) {
  count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
      console.log(arr[i]);
      count++;
    }
  }
  console.log("Values greater than second value: " + count);
}

greaterThanSecond(array);
