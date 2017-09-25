var array1 = [2, 3, 5, 7];
var array2 = [2, 4, 6];
var array3 = [1, 3, 5, 2, 4, 6];

function evensOdds(arr) {
  var even = 0;
  var odd = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd++;
      if (even < 3) {
        even = 0;
      }
    } else {
      even++;
      if (odd < 3) {
        odd = 0;
      }
    }
  }

  if (odd >= 3 && even >= 3) {
    console.log("That's odd! Even more so!");
  } else if (odd >= 3) {
    console.log("That's odd!");
  } else {
    console.log("Even more so!");
  }
}

evensOdds(array3);
