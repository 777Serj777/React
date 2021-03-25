import React, {useState, useEffect, useContext} from 'react'
import { useSelector } from 'react-redux';
import Button from '../Button'







const Timer = (props) => {

    const {timer, name, id} = props;

    const [btnClick, setBtnClick] = useState('');


    return ( 
        <div className = "timer">    
            <div className = 'timer__participant'>
                <h4 className = "timer__title-participant">Participant</h4>
                <p className = "timer__id-participant">{id}</p>
                <p className = "timer__name-participant">{name}</p>
            </div>
                <p className = "timer__board">{timer}</p> 
                <div className = "timer__buttons">
                <Button className = "timer__btn timer__btn-start" onClick = {() => setBtnClick('start') }>Start</Button>
                <Button className = "timer__btn timer__btn-stop"  onClick = {() => setBtnClick('stop') }>Stop</Button>
                <Button className = "timer__btn timer__btn-reset" onClick = {() => setBtnClick('') }>Reset</Button>         
            </div> 
            <div>
                <Button className = "timer__btn timer__btn-cancel"  onClick = {() => setBtnClick('') }>Cancel</Button>
                <Button className = "timer__btn timer__btn-save"  onClick = {() => setBtnClick('') }>Save</Button>
            </div>  
        </div>
        
    )    
}


export default Timer;