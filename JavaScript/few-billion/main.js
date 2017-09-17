var reward = 0.01;
var thirtyDayTotal;
var daysToTenThousand;
var daysToBillion;
var daysToInfinity;

for(var i = 1; i <= 30; i++){
  reward = reward * 2;
}

console.log("The final reward after 30 days would be: $" + reward);

var reward = 0.01;

for(var i = 1; i <= Infinity; i++){
  reward = reward * 2;
  if(reward >= 10000 && reward < 11000) {
    daysToTenThousand = i;
  }
  if(reward >= 1000000000 && reward < 2000000000){
    daysToBillion = i;
  }
  if(reward >= Infinity){
    daysToInfinity = i;
    break;
  }
}

console.log("It took " + daysToTenThousand + " days for the reward to reach at least $10,000.");
console.log("It would take " + daysToBillion + " days to reach at least 1 billion dollars.")
console.log("It would take " + daysToInfinity + " days to reach infinite funds.");
