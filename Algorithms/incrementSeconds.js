array = [1, 2, 3, 4, 5, 6];

function incrementSeconds(arr) {
  length = arr.length;

  console.log(arr);

  for (var i = 0; i < length; i++) {
    if (i % 2 !== 0) {
      arr[i] += 1;
      console.log(arr[i]);
    }
  }

  return arr;
}

incrementSeconds(array);
