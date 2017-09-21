function multiplesOfThree(start, end) {
  for (var i = start; i <= end; i++) {
    if (i % 3 === 0) {
      if (i === -6 || i === -3) {
        continue;
      } else {
        console.log(i);
      }
    }
  }
}

multiplesOfThree(-300, 0);
