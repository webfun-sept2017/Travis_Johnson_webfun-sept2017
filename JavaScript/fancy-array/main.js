var names = ["James", "Jill", "Jane", "Jack"];

function printNames(arr, sym) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i + " " + sym + " " + names[i]);
  }
}

printNames(names, "->");
