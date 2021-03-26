import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import Button from '../Button'







const Timer = (props) => {

    const {id, name, seconName} = useSelector(store => store.registration.participant);
    const timer = useSelector(store => store.timer.time)

    const [btnClick, setBtnClick] = useState('');


    return ( 
        <div className = "timer">    
            <div className = 'timer__participant'>
                <h4 className = "timer__title-participant">Participant</h4>
                <p className = "timer__id-participant">ID: {id}</p>
                <p className = "timer__name-participant">Participant: {name} {seconName}</p>
            </div>
                <p className = "timer__board">{timer}</p> 
            <div className = "timer__buttons">
                <Button className = "timer__btn timer__btn-start" onClick = {() => setBtnClick('start') }>Start</Button>
                <Button className = "timer__btn timer__btn-stop"  onClick = {() => setBtnClick('stop') }>Stop</Button>
                <Button className = "timer__btn timer__btn-reset" onClick = {() => setBtnClick('') }>Reset</Button>         
            </div> 
            <div className = "timer__buttons">
                <Button className = "timer__btn timer__btn-save"  onClick = {() => setBtnClick('') }>Save</Button>
                <Button className = "timer__btn timer__btn-cancel"  onClick = {() => setBtnClick('') }>Cancel</Button>
            </div>  
        </div>
        
    )    
}


export default Timer;