import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';

const Winner = (props) => {
    const {name, id, time} = useSelector( store => store.winner.currentWinner);
    return (
        <ul>
            <li>ID: {id}</li>
            <li>Name: {name}</li>
            <li>Time: {time}</li>
        </ul>
    )
}

const WinnerInfo = (props) => {

    const {arrParticipants, isWinner} = useSelector(store => {
        return {
            arrParticipants: store.participants.arrParticipants,
            isWinner: store.winner.isWinner
        }
    });
    const dispatch = useDispatch();
    
    return (
        <div className = 'winner-info'>
            {(isWinner) ? <h3>The winner</h3> : <h3>Total participants: {arrParticipants.length}</h3>}
            {(isWinner) ? <Winner/> : <Button onClick = {() => {  
                if(arrParticipants.length === 0) return;     
                dispatch({type: 'CHOOSE_WINNER', payload: {arrParticipants}});
                dispatch({type: 'CLEAR_ARR_PARTICIPANT'});
            }}>Show Winner</Button>}
        </div>
    )
}

export default WinnerInfo;