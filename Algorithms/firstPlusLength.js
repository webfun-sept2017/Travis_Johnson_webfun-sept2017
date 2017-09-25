var myArr = ["test", 1, 2, 3];

function firstPlusLength(arr) {
  var length = arr.length;
  var sum = 0;
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      newArr.push(arr[i]);
    }
  }

  console.log(newArr[0] + length);
}

firstPlusLength(myArr);

//Solved by building a new array that was made up of only numbers. Then grabbed the first available number
//and added it to the original length.
