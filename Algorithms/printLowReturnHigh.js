var array = [1, 2, 3, 4, 5, 6];

function pLowRHigh(arr) {
  Array.min = function(arr) {
    return Math.min.apply(Math, arr);
  };

  Array.max = function(arr) {
    return Math.max.apply(Math, arr);
  };

  var minimum = Array.min(arr);
  var maximum = Array.max(arr);

  console.log(minimum);
  return maximum;
}

pLowRHigh(array);
