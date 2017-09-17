var HOUR = 9;
var MINUTE = 15;
var PERIOD = "PM";

var firstStatment = "";
var secondStatement ="";


if(MINUTE === 15) {
  firstStatment = "It's quarter past ";
} else if (MINUTE === 30) {
  firstStatment = "It's half past ";
} else if (MINUTE === 5) {
  firstStatment = "It's 5 after ";
} else if(MINUTE < 30) {
  firstStatment = "It's just after ";
} else {
  firstStatment = "It's just before ";
}

if(PERIOD === "AM"){
  secondStatement = " in the morning.";
} else if(PERIOD === "PM" && HOUR < 5){
  secondStatement = " in the afternoon.";
} else if(PERIOD === "PM" && HOUR >= 5){
  if(HOUR <= 8){
    secondStatement = " in the evening.";
  } else {
    secondStatement = " at night.";
  }
} else {
  secondStatement = " at night.";
}

if(HOUR === 12 && MINUTE === 0){
  if(PERIOD === "PM"){
    console.log("It's noon!");
  } else {
    console.log("It's midnight!");
  }
} else {
  console.log(firstStatment + HOUR + secondStatement);
}
