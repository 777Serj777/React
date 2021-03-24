import React, {useContext} from 'react';
import {RegistrationContext} from '../../context'
import crateAction from '../../store/crateAction'
import {Input} from '../Input';
import {Userpic} from '../registration/Userpic';
import {Button} from '../Button';




export const StepsToRegister = (props) => {

    const {state, dispatch} = useContext(RegistrationContext);

    const {infoUser, valid} = state;
    console.log(state);
    return (   
        <>  
        <legend className = "check-in__title">Шаг: {state.step}</legend>
        <div className =  {`${props.classParent}__wrap-input`}>
        
            {
                    {
                        1: (state.step === 1) && [    
                            <Input  
                                key = {1}           
                                id = 'name'
                                Label = 'Имя'
                                type = 'text'
                                isValid = {valid.name.isValid}                             
                                value = {infoUser.name || ""}
                                classNameForWrap = {`${props.classParent}__text`}
                                onChange = {(e) => {
                                    dispatch(crateAction.addInfoUser({name: e.target.value}))
                                    dispatch(crateAction.setValid({name: e.target.value}))
                                }}

                            />,
                            <Input 
                                key= {2}     
                                id= 'surname'
                                Label='Фамилия'
                                type= 'text'   
                                isValid = {valid.surname.isValid}    
                                value= {infoUser.surname || ""}
                                classNameForWrap = {`${props.classParent}__text`}
                                onChange = {(e) =>{ 
                                    dispatch(crateAction.addInfoUser({surname: e.target.value})) 
                                    dispatch(crateAction.setValid({surname: e.target.value}))
                                }}                      
                            />,
                            <Input 
                                key= {3}     
                                id= 'email'
                                Label='Email'
                                type= 'text'       
                                isValid = {valid.email.isValid} 
                                value= {infoUser.email || ""}
                                classNameForWrap = {`${props.classParent}__text`}
                                onChange = {(e) => {
                                    dispatch(crateAction.addInfoUser({email: e.target.value}))
                                    dispatch(crateAction.setValid({email: e.target.value}))
                                }} 
                            />
                        ],
                        2: (state.step === 2) && [    
                            <Input
                                key = {4}
                                id = 'city'
                                Label = 'Город'
                                type = 'text'
                                isValid = {valid.city.isValid} 
                                value = {infoUser.city || ""}       
                                classNameForWrap = {`${props.classParent}__text`}
                                onChange = {(e) => {
                                    dispatch(crateAction.addInfoUser({city: e.target.value}))
                                    dispatch(crateAction.setValid({city: e.target.value}))
                                }}                         
                            />,
                            <Input 
                                key= {5}  
                                id= 'street'
                                Label='Улица'
                                type= 'text'
                                isValid = {valid.street.isValid} 
                                value= {infoUser.street || ""}  
                                classNameForWrap = {`${props.classParent}__text`}
                                onChange = {(e) => {
                                    dispatch(crateAction.addInfoUser({street: e.target.value}))
                                    dispatch(crateAction.setValid({street: e.target.value}))                               
                                }}                         
                            />,
                            <Input 
                                key = {6}  
                                id = 'house'
                                Label ='Дом'
                                type = 'text'
                                isValid = {valid.house.isValid} 
                                value = {infoUser.house || ""} 
                                classNameForWrap = {`${props.classParent}__text`}
                                onChange = {(e) => {
                                    dispatch(crateAction.addInfoUser({house: e.target.value}))
                                    dispatch(crateAction.setValid({house: e.target.value}))                             
                                }}                          
                            />
                        ],
                        3: (state.step === 3) && [    
                            <Input
                                key = {7}       
                                id = 'photo'
                                Label ='Upload Photo'
                                type = 'file'                            
                                classNameForWrap = {`${props.classParent}__file`}
                                onChange = {(e) => {
                                    dispatch(crateAction.addPhotoUser(e.target.files[0]))                              
                                }} 
                            />,
                           <Userpic key = {8} classParent = {props.classParent}/>
                        ],
                        4: (state.step === 4) && [    
                            <Input 
                                key = {9}     
                                id = 'password'
                                Label ='Пароль'
                                type = 'password'  
                                autoComplete = 'new-password'
                                isValid = {valid.password.isValid}  
                                value = {infoUser.password || ""}
                                classNameForWrap = {`${props.classParent}__password`}
                                onChange = {(e) => {
                                    dispatch(crateAction.addInfoUser({password: e.target.value}))
                                    dispatch(crateAction.setValid({password: e.target.value}))                              
                                }}                                                              
                            />,
                            <Input 
                                key = {10}     
                                id = 'repeatPassword'
                                Label ='Подтвердить пароль'
                                type = 'password'
                                isValid = {valid.repeatPassword.isValid} 
                                value = {infoUser.repeatPassword || ""}  
                                classNameForWrap = {`${props.classParent}__password`}
                                onChange = {(e) => {
                                    dispatch(crateAction.addInfoUser({repeatPassword: e.target.value}))
                                    dispatch(crateAction.setValid({repeatPassword: e.target.value}))                                
                                }}                                  
                            />
                        ],                                                
                }[state.step]                 
            }
        </div>
        <div className = 'check-in__wrap-btn'>
            {(state.step !== 1 ) && <Button className = 'check-in__btn' onClick = {() => {dispatch({type: 'PREV_STEP'})}}>Previous</Button>}
            {(state.step !== 4) && <Button className = 'check-in__btn' onClick = {() => {dispatch({type: 'NEXT_STEP'})}}>Next</Button>}  
            {(state.step === 4) && <Button className = 'check-in__btn' onClick = {() => {dispatch(crateAction.checkValid(state.valid, state.infoUser))}}>Submit</Button>}
        </div> 
        </>
    )
}