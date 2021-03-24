import React from 'react'

export function Button({children, onClick,  ...props}) {
   
    return(
        <button type = 'submit' className = {props.className || 'btn'} onClick = {(e) => {e.preventDefault(); onClick()}}>{children}</button> 
    )
}


