function beCheerful() {
  console.log("good morning!");
}

//added a console log to verify correct amount of logs
for (var i = 0; i < 99; i++) {
  console.log(i) + " " + beCheerful();
}
