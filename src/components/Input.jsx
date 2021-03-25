import React from 'react'


const Input = ({label, children, wrappClass, ...props}) => {

    return (
        <p className = {wrappClass}>
            {(label) && <label htmlFor= {props.name}>{label}</label>}
            <input className = 'input' {...props} />
        </p>
    )

}


export default Input;