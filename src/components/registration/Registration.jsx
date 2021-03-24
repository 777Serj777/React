import React, {useReducer} from "react";
import {RegistrationContext, initialState} from '../../context'
import createAction from "../../store/createAction";
import reducer from '../../store/reducer';
import {StepsToRegister} from '../registration/StepsToRegister';

import {SuccessfulRegistration} from '../registration/SuccessfulRegistration';


const Theme = (props) => {

    let theme = (props.theme) ? 'dark' : 'light'

    return (
        <p className = 'theme theme__range'  onClick = {props.onClick}>
            <span  className = {`theme__btn ${theme}`}/>
        </p>
    )
}
export const Registration = () => {
  
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (

        <RegistrationContext.Provider value = {{state, dispatch}}>
            <form action="#" className = {`check-in ${(state.themeDark) ? 'dark' : 'light'}`}>
                <Theme theme = {state.themeDark} onClick = {() => {dispatch(createAction.changeTheme(state.themeDark))}}/>
                <fieldset className = "check-in__wrapper">
                    {(state.isAuth) ? <SuccessfulRegistration  classParent = 'check-in'/> : <StepsToRegister classParent = 'check-in'/> }     
                </fieldset>
            </form>
        </RegistrationContext.Provider>
    )
}