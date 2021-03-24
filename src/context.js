import React from 'react';

export const initialState = {

    step: 1,
    isAuth: false,

    valid:{
        name: {
            isValid: false,       
        },
        surname: {
            isValid: false,    
        },
        email: {
            isValid: false,           
        },
        city: {
            isValid: false,          
        },
        street: {
            isValid: false,
         
        },
        house: {
            isValid: false,
        
        },
        password: {
            isValid: false,
         
        },
        repeatPassword: {
            isValid: false,
          
        },
     
    },
    themeDark: false,

    infoUser: {
        name: "",
        surname: "",
        email: "",
        city: "",
        street: "",
        house: "",
        password: "",
        repeatPassword: "",
        urlImg: ""   
    }

}
export const RegistrationContext = React.createContext(null);