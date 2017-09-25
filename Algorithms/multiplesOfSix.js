function multiplesOfSix(num) {
  var count = 1;

  while (count < num) {
    if (count % 6 === 0) {
      console.log(count);
    }
    count++;
  }
}

multiplesOfSix(60000);
