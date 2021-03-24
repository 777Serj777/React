
import React, {useContext} from 'react';
import {Button} from '../Button';

export const listButtons = (props) => {
    
    


    return (
        <>
            
            <div className = {`${props.classParent}__wrap-btn`}>
                {(state.step !== 1 ) && <Button className = {`${props.classParent}__btn`} onClick = {() => {dispatch({type: 'PREV_STEP'})}}>Previous</Button>}
                {(state.step !== 4) && <Button className = {`${props.classParent}__btn`} onClick = {() => {dispatch({type: 'NEXT_STEP'})}}>Next</Button>}  
                {(state.step === 4) && <Button className = {`${props.classParent}__btn`} onClick = {() => {
                         
                    for (const key in infoUser) { 
                        if(!infoUser[key].isValid){
                            dispatch({type: 'DATA_IS_NOT_VALID', payload: {message: 'The data is not valid!'}})
                            return; 
                        }
                    }                 
                    if(infoUser.password.value === infoUser.repeatPassword.value){                       
                        dispatch({type: 'SAVE_USER'})
                        return;
                    }
                    else{
                        dispatch({type: 'DATA_IS_NOT_VALID', payload: {message: 'passwords not match!'}})
                        return;
                    }
                  
                }}>Submit</Button>}
            </div>
        </>
    )
}