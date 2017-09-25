function thatsHuge(start, end) {
  var sum = 0;

  for (var i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      sum += i;
      console.log(i);
    }
  }
  console.log(sum);
}

thatsHuge(-300000, 300000);
