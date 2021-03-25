import React from 'react'

const Button = ({children, ...props}) => {

    return (
        <input type = 'button' className = 'btn' defaultValue = {children} {...props} />
    )

}


export default Button;