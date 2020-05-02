
const dayStart = "07:30";
const dayEnd = "17:45";
var flag = 0, flag1 = 0
  
function scheduleMeeting(startTime,durationMinutes) {
      
  var hh = parseInt(startTime.split(":")[0]);
  var mm = parseInt(startTime.split(":")[1]);
  var hh1 = parseInt(dayStart.split(":")[0]);
  var mm1 = parseInt(dayStart.split(":")[1]);
  var hh2 = parseInt(dayEnd.split(":")[0]);
  var mm2 = parseInt(dayEnd.split(":")[1]);
  
  var totalmm = mm + durationMinutes;
  var newhh = hh;
  while(totalmm>=60){
    newhh ++;
    totalmm = totalmm - 60;
  }
  var newTime = newhh + ":" + totalmm;
  console.log(newTime);

if(newhh >= hh1 && newhh <= hh2){
  if(newhh==hh1){
    if(totalmm > mm1){
      console.log("dayStart1");
      flag =1;
    }
    else{
        flag = 0;
        console.log("dayStart2");
    }
  }
  else{
      flag =1;
      console.log("dayStart3");
  }
  if(newhh==hh2){
    if(totalmm<=mm2){
        console.log(totalmm,mm2);
      console.log("dayEnd1");
      flag1 = 1;
    }
    else{
        flag1 = 0;
        console.log(totalmm,mm2);
        console.log("dayEnd2"); 
    }
  }
  else{
      flag1 = 1;
      console.log("dayEnd3"); 
  }
}
console.log(flag);
console.log(flag1); 
  if(flag && flag1){
    return true;
  }
  else{
    return false;
  }
}
console.log(scheduleMeeting("18:00",15));
//scheduleMeeting("7:30",30);     // true
//scheduleMeeting("11:30",60);    // true
//scheduleMeeting("17:00",45);    // true
//scheduleMeeting("17:30",30);    // false
//scheduleMeeting("18:00",15);    // false