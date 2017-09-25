function finalCountdown(lowNum, highNum, mult, e) {
  for (var i = highNum; i >= lowNum; i--) {
    if (i % mult === 0 && i !== e) {
      console.log(i);
    }
  }
}

finalCountdown(5, 17, 3, 9);
