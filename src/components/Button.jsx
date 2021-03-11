import React from "react";

export function Button({children, className, handleClick}) {

    return(
        <button 
            className = {className || 'btn'}
            onClick = {handleClick}
        >
            {children}
         
        </button> 
    )
}


