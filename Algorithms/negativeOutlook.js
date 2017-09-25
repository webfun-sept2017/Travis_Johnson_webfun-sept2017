var array = [1, -3, 5];

function negativeOutlook(arr) {
  var negArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      v = arr[i] - arr[i] * 2;
      negArray.push(v);
    } else {
      negArray.push(arr[i]);
    }
  }

  console.log(negArray);
}

negativeOutlook(array);
