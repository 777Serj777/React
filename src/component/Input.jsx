
export function Input(props) {
    return(
        <input 
            value = {props.value} 
            type="text"
            placeholder = "enter name"  
            style = {{margin: "20px auto", display: 'block'}} 
            onChange = {(e) => {props.searchByName(e)}}
        />
    )
}

