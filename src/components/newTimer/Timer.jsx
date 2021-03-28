import React, {useCallback, useEffect, useMemo, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button'


const startClick = (time, startTime) => {
     
    let hour, minute, second; //milliseconds;
    
    let currentTime =  (Date.now() - startTime) + time;
 
    //milliseconds = currentTime % 1000; 
    second = ~~(currentTime / 1000 % 60);
    minute = ~~(currentTime / 1000 / 60 % 60);  
    hour = ~~(currentTime / 1000 / 60 / 60 % 25);

    //let fMilliseconds = '000'.slice(String(milliseconds).length) + milliseconds;
    let fSecond = (second > 9) ? second : '0' + second;
    let fMinute = (minute > 9) ? minute : '0' + minute;
    let fHour = (hour > 9) ? hour : '0' + hour;
    //.${fMilliseconds}
    return  `${fHour}:${fMinute}:${fSecond}`;
}

const convertToMilliseconds = (time) => {

    return time.split(/[\:\.]/g).reduce((accumulator, nValue, index) => {
         
      nValue = Number(nValue)
         
      accumulator += (index === 0) && (nValue * 60 * 60 * 1000) 
      || (index === 1) && (nValue * 60 * 1000) 
      || (index === 2) && (nValue * 1000) 
      || (index === 3) && nValue;
      
      return accumulator; 
  
    }, 0);
                
}

const useTimer = (initTime) => {

    const [time, setTime] = useState(initTime);
    let timer; 
    
    const startTimer = () => {

        let currentTime  =  convertToMilliseconds(time);

        const timeNow = Date.now();

        timer = setInterval(() => setTime(startClick(currentTime, timeNow)), 10)

    }

    const stopTimer = () =>{
        clearInterval(timer)

    }
    const changeTime = (newTime) => {
        setTime(newTime);
    }

    return {
        time,
        startTimer,
        stopTimer,
        changeTime
    }

} 

const Timer = (props) => {

    const {id, name, seconName} = useSelector(store => store.registration.participant);
    const dispatch = useDispatch();
    const [btnClick, setBtnClick] = useState('');
    const timer = useTimer('00:00:00');


    useEffect(() => {

        if(btnClick === 'start') timer.startTimer(); 
        if(btnClick === 'reset') timer.changeTime('00:00:00'); 

        return () => timer.stopTimer();

    }, [btnClick])


    return ( 
        <div className = "timer">    
            <div className = 'timer__participant'>
                <h4 className = "timer__title-participant">Participant</h4>
                <p className = "timer__id-participant">ID: {id}</p>
                <p className = "timer__name-participant">Participant: {name} {seconName}</p>
            </div>
            <p className = "timer__board">{timer.time}</p>
            <div className = "timer__buttons">
                <Button 
                    disabled = {(btnClick === '' || btnClick === 'reset') ? false : true} 
                    className = "timer__btn timer__btn-start" 
                    onClick = {() => setBtnClick('start') }
                >
                    Start
                </Button>
                <Button 
                    disabled = {(btnClick === '' || btnClick === 'stop') ? true : false}
                    className = "timer__btn timer__btn-stop"  
                    onClick = {() => setBtnClick('stop') }
                >
                    Stop
                </Button>
                <Button  
                    disabled = {(btnClick === 'stop') ? false : true}  
                    className = "timer__btn timer__btn-reset" 
                    onClick = {() => setBtnClick('reset') }
                >
                    Reset
                </Button>         
            </div> 
            <div className = "timer__buttons">
                <Button 
                    disabled = {(btnClick === 'stop' && timer.time !== '00:00:00') ? false : true}   
                    className = "timer__btn timer__btn-save"  
                    onClick = {() => {
                     
                        dispatch({type: 'ADD_PARTICIPANT', payload: { id, name, time: timer.time}})
                        dispatch({type: 'RESET_PARTICIPANT'})
                                  
                    } }
                >   
                    Save
                </Button>
                <Button 
                    className = "timer__btn timer__btn-cancel"  
                    onClick = {() => {
                        dispatch({type: 'RESET_PARTICIPANT'});
                    }}
                >
                    Cancel
                </Button>
            </div>  
        </div>
        
    )    
}


export default Timer;