function multiplesFive(start, end) {
  var counter = 0;

  for (i = start; i <= end; i++) {
    if (i % 5 === 0) {
      console.log(i);
      counter++;
    }
  }
  console.log(counter + " mulitples of 5.");
}

multiplesFive(512, 4096);
