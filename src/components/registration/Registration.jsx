import React, { useEffect, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux';

const useInput = (inputValue = '') => {

    const [value, setValue] = useState(inputValue);
    const [isEmpty, setIsEmpty] = useState(true)
    
    useEffect(() => {         
        if(value.length > 0) setIsEmpty(false)         
        else setIsEmpty(true)
    }, [value])

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return{
        onChange,
        value,
        isEmpty  
    }
}

export const Registration = (props) => {

    const dispatch = useDispatch();
    const validData = useSelector(store => store.registration.validData)

    const name = useInput()
    const seconName = useInput()

    useEffect(() => {

        (name.isEmpty || seconName.isEmpty) ? 
        dispatch({type: 'SET_VALIDATION', payload: {validData: false}}) : 
        dispatch({type: 'SET_VALIDATION', payload: {validData: true}})

    }, [name.isEmpty, seconName.isEmpty])

    return (
        <form action="#" className = 'regist'>
            <h3 className = 'regist__title'>Registration user</h3>
            <Input 
                value = {name.value}
                onChange = {name.onChange} 
                wrappClass = 'regist__input' 
                label = 'First name:'      
                placeholder = 'Enter first name...'
                className = {(name.isEmpty) ? 'input__is-empty' : 'input'}          
            />   
            <Input 
                value = {seconName.value} 
                onChange = {seconName.onChange} 
                wrappClass = 'regist__input' 
                label = 'Second name:' 
                placeholder = 'Enter second name...'
                className = {(seconName.isEmpty) ? 'input__is-empty' : 'input'}  
            />
            <Button 
                onClick = {() => {
                    dispatch({
                        type: 'REGISTER_PARTICIPANT', 
                        payload: {name: name.value, seconName: seconName.value}
                    })
                }} 
                disabled = {validData ? '' : 'disabled'} 
                className = 'regist__btn'
            >
                Register participant
            </Button>        
        </form>
    )

}

export default Registration;