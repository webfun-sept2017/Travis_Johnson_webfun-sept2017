var array1 = [5, 3, 2];
var array2 = [1, 2, 3];
var array3 = [3, 2, 1];

function fitTheFirstValue(arr) {
  if (arr[0] > arr.length) {
    console.log("Too big!");
  } else if (arr[0] < arr.length) {
    console.log("Too small!");
  } else {
    console.log("Just right!");
  }
}

fitTheFirstValue(array1);
fitTheFirstValue(array2);
fitTheFirstValue(array3);
