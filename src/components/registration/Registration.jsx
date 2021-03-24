import React, {useReducer} from "react";
import {RegistrationContext, initialState} from '../../context'
import reducer from '../../store/reducer';
import {StepsToRegister} from '../registration/StepsToRegister';

import {SuccessfulRegistration} from '../registration/SuccessfulRegistration';

export const Registration = () => {
  
    const [state, dispatch] = useReducer(reducer, initialState);

    return (

        <RegistrationContext.Provider value = {{state, dispatch}}>
            <form action="#" className = "check-in">
                <fieldset className = "check-in__wrapper">
                    {(state.isValid) ? <SuccessfulRegistration  classParent = 'check-in'/> : <StepsToRegister classParent = 'check-in'/> }     
                </fieldset>
            </form>
        </RegistrationContext.Provider>
    )
}