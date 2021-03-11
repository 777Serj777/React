
import React, {useState, useEffect} from 'react'
import {Button} from './Button'

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

    const [timer, setTimer] = useState(props.format);
    const [btnClick, setBtnClick] = useState('');
    const [listTimer, setListTimer] = useState([]);

    let id = 0;
    let startTimer;

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
           setListTimer([...listTimer, timer]);
           break; 
        }

        case 'reset': {
          setListTimer([...listTimer, timer]);
          setTimer(props.format);
          break;
        }
      }
      
      return () => clearInterval(startTimer);

    }, [btnClick])

    const handleClickStop = () => {
        new Audio('e61cdb72dc8aa8c.mp3').play();
        (btnClick === 'start') && setBtnClick('stop');
      }
      const handleClickStart = () => {
        new Audio('e61cdb72dc8aa8c.mp3').play();
        setBtnClick('start');
      }
      const handleClickReset = () => {
        new Audio('e61cdb72dc8aa8c.mp3').play();
        setBtnClick('reset');
      }
   
    return (
        
        <div className = "timer">
          
            <p>{timer}</p> 
            <div className = "timer__buttons">
              <Button 
                className = {`timer__btn ${(btnClick === 'stop') ? "timer__btn-continue" : "timer__btn-start"}`}
                handleClick = {handleClickStart}
                >{(btnClick === 'stop') ? 'Continue' : 'Start'}
              </Button> 

              <Button 
                className = "timer__btn timer__btn-stop" 
                handleClick = {handleClickStop}
                >Stop  
              </Button>

              <Button 
                className = "timer__btn timer__btn-reset" 
                handleClick = {handleClickReset}
                >Reset
              </Button>
            </div>
            <ul className = "timer__list-time">
              {listTimer.map(time => <li key = {id++}>{time}</li>)}
            </ul>
          
        </div>
    )    
}