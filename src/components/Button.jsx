import React from 'react'

export const Button = ({children, ...props}) => <input type = 'button' {...props}  defaultValue = {children} className = {props.className || 'btn'}/>

    


