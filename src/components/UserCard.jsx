import React from 'react'
import Button from './Button'

const UserCard = (props) => {

    const {id, name, time} = props;

    return (
        <div className = 'card'>
            <div className = 'card__user'>
                <p className = 'card__user-id'>ID: {id}</p>
                <p className = 'card__user-name'>Name: {name}</p>
                <p className = 'card__user-time'>Time: {time}</p>
            </div>
            <Button className = 'card__delete-btn'>Delete</Button>
        </div>
    )

}

export default UserCard;