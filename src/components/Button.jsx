import React from 'react'

const Button = ({children, disabled, className, ...props}) => {

    return (
        <input  
            disabled = {disabled} type = 'button' 
            className = {`${className ? className : 'btn' }  ${(disabled) ? 'btn-block' : ''}`}  
            defaultValue = {children} 
            {...props} 
        />
    )

}


export default Button;