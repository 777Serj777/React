import React from 'react'

export function Input({classNameForWrap, Label, isValid,  ...props}) {

    return(
        <p className = {classNameForWrap || 'input-text'}>
            {Label &&  <label htmlFor= {props.id}>{Label}</label> }
            <input className = { (!isValid) ? 'is-not-valid' : '' } {...props}/>
        </p>
    )
}

