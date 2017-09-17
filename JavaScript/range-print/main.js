function printRange(start, end, skip) {
  var s = start;
  var e = end;
  var x = skip;

  if(x == null) {
    x = 1;
  }

  if(end == null) {
    s = 0;
    e = start;
  }

  for(i = s; i < e; i++){
    if(i % x === 0){
      console.log(i);
    }
  }
}

printRange(2,10,2);
printRange(4,8);
printRange(4);
