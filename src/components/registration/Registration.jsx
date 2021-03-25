import React from 'react'
import Input from '../Input'
import Button from '../Button'

export const Registration = (props) => {

    return (
        <form action="#" className = 'regist'>
            <h3 className = 'regist__title'>Registration user</h3>
            <Input wrappClass = 'regist__input' label = 'First name:' placeholder = 'Enter first name...'/>
            <Input wrappClass = 'regist__input' label = 'Second name:' placeholder = 'Enter second name...'/>
            <Button className = 'regist__btn'>Register participant</Button>        
        </form>
    )

}


export default Registration;