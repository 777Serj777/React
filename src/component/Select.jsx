function Option(props) {
    let count = 0;
    let age = props.users.map(user => user.age).filter((age, index, arr) => (arr.indexOf(age) === index)).map(age => <option key = {count++}>{age}</option>);
    age.push(<option key = {count++}>{'any'}</option>)
    return (   
      age
    ) 
}

export function Select(props) {  
    return(
        <select 
            defaultValue = 'any'
            name="" 
            id="" 
            style = {{margin: "0 auto", display: 'block' }} 
            onChange = {(e) => {props.searchByAge(e)}}>
            <Option users = {props.users}/>
        </select>
    )
}
