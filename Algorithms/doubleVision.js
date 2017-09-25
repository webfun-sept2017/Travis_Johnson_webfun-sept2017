var array = [1, 2, 3];

function doubleVision(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var x = arr[i] * 2;
    newArr.push(x);
  }

  console.log(newArr + " - doubled array.");
  console.log(arr + " - original array.");
}

doubleVision(array);
