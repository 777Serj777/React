import React from 'react'
import { useDispatch } from 'react-redux';
import Button from './Button'

const UserCard = (props) => {

    const {id, name, time} = props;
    const dispatch = useDispatch();

    return (
        <div className = 'card'>
            <div className = 'card__user'>
                <p className = 'card__user-id'>ID: {id}</p>
                <p className = 'card__user-name'>Name: {name}</p>
                <p className = 'card__user-time'>Time: {time}</p>
            </div>
            <Button className = 'card__delete-btn' onClick = {()=>{dispatch({type: 'REMOVE_PARTICIPANT', payload: {id}})}}>Delete</Button>
        </div>
    )

}

export default UserCard;