var array = [1, 3, 5, 7, 9, 13];
var tooShort = [1];

function greaterThanSecondG(arr) {
  var newArr = [];
  count = 0;

  if (arr.length > 1) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[1]) {
        newArr.push(arr[i]);
        count++;
      }
    }
    console.log(newArr);
    console.log("Total values in the new array: " + count);
  } else {
    console.log("Error: Array must contain at least 2 values!");
  }
}

greaterThanSecondG(array);
greaterThanSecondG(tooShort);
