var daysUntilMyBirthday = 60;

for(var i = daysUntilMyBirthday; i >= 0; i--){
  if(i >= 30) {
    console.log(i + " days until my birthday. Such a long time... :(");
  }
  else if(i < 30 && i > 5) {
    console.log(i + " days until my birthday. Almost time! :)");
  }
  else if(i <= 5 && i > 0) {
    console.log(i + " DAYS UNTIL MY BIRTHDAY! OMG!");
  }
  else if(i === 0){
    console.log("IT'S FINALLY MY BIRTHDAY!!!!!!!!");
    console.log('♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*');
    console.log('♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪');
    console.log('*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«');
  }
}
