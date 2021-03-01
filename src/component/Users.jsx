
const container  = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '250px',
    border: '1px solid #000',
    borderRadius: '5px',
    margin: '10px'
}

export function ListUsers(props) {
  return props.users.map(user =>  <User click = {props.clickUser} user = {user} key = {user._id}/>);
}

export function  User(props) {
  return (
    <div className = "user" style = {container} onClick = {() => {props.click(props.user)}}>
      <img src = {props.user.picture} alt="" className = "user__photo"/>
      <p className = "user__name">Name: {props.user.name}</p>
      <p className = "user__age">Age: {props.user.age}</p>
      <p className = "user__gender">{props.user.gender}</p>
      <p className = "user__balance">{props.user.balance}</p>
    </div>
  )
}