let alarm = process.argv
let changeToSecond = 1000      // values are provided in seconds so seconds * 1000
const timer = function (){
  for(i = 0; i < alarm.length; i++){
    if(alarm[i] >= 0 && alarm[i] !== NaN){            //makes sure if no num,(-num)& not a num 
      setTimeout(() => {
        process.stdout.write('\x07');
      }, alarm[i]*changeToSecond);
    }
  } 
} 
timer(alarm);