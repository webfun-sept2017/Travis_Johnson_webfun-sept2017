function countdown(num) {
  var arr = [];

  for (var i = num; i >= 0; i--) {
    arr.push(i);
  }

  console.log(arr);
  console.log("Array length is: " + arr.length);
}

countdown(10);
