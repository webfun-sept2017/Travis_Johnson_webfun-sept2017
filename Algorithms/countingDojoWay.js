function countingDojoWay() {
  for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 10 === 0) {
      console.log(i + " Coding Dojo");
    } else if (i % 5 === 0) {
      console.log(i + " Coding");
    }
  }
}

countingDojoWay();
