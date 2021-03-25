
import React, {useState, useEffect} from 'react'


const timerTick = (time, startTime) => {
 
  let hour, minute, second, milliseconds;

  let currentTime =  (Date.now() - startTime) + time;
  
  milliseconds = currentTime % 1000; 
  second = ~~(currentTime / 1000 % 60);
  minute = ~~(currentTime / 1000 / 60 % 60);  
  hour = ~~(currentTime / 1000 / 60 / 60 % 25);

  let fMilliseconds = '000'.slice(String(milliseconds).length) + milliseconds;
  let fSecond = (second > 9) ? second : '0' + second;
  let fMinute = (minute > 9) ? minute : '0' + minute;
  let fHour = (hour > 9) ? hour : '0' + hour;

  return  `${fHour}:${fMinute}:${fSecond}.${fMilliseconds}`;
}

export function Timer(props) {



    useEffect(() => {
  
      let nowTime = Date.now()
   
      switch (btnClick) {
     
        case 'start': {
      
          let currentTime =  timer.split(/[\:\.]/g).reduce((accumulator, nValue, index) => {

            nValue = Number(nValue)
       
            accumulator += (index === 0) && (nValue * 60 * 60 * 1000) 
            || (index === 1) && (nValue * 60 * 1000) 
            || (index === 2) && (nValue * 1000) 
            || (index === 3) && nValue;
            
            return accumulator; 

          }, 0);

          startTimer = setInterval(() => {
          
            setTimer(() => timerTick(currentTime, nowTime));
    
          }, 10);

          break;
        }

        case 'stop': {
      
     
           break; 
        }

        case 'reset': {
 
         
          setTimer(props.format);
          break;
        }

     
      }
      
      return () => clearInterval(startTimer);

    }, [btnClick])


   
    return (
        
     
          
    <></>
    )    
}