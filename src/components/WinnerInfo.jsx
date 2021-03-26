import React from 'react'
import Button from './Button';



const Winner = (props) => {
    const {name, id, time} = props;
    return (
        <ul>
            <li>ID: {id}</li>
            <li>Name: {name}</li>
            <li>Time: {time}</li>
        </ul>
    )
}

const WinnerInfo = (props) => {


    return (
        <div className = 'winner-info'>
            {(false) ? <h3>The winner</h3> : <h3>Total participants: {}</h3>}
            {(false) ? <Winner winner = {''}/> : <Button>Show Winner</Button>}
        </div>
    )
}

export default WinnerInfo;