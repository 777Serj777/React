export function Button({children, ...props}) {
    return(
        <button onClick = {props.reset} style = {{margin: "10px auto", display: 'block' }}>{children}</button> 
    )
}


