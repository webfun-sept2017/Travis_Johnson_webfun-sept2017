function flexCountdown(lowNum, highNum, mult) {
  for (var i = highNum; i >= lowNum; i -= mult) {
    console.log(i);
  }
}

flexCountdown(2, 9, 3);
