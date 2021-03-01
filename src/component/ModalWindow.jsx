
export function ModalWindow(props) {
   
    return (
        <div className = "modal-window">
            <button className = "close-window" onClick = {props.closeWindow}></button>
            <p className = "user-name">Name: {props.user.name}</p>
            <p className = "user-company">Company: {props.user.company}</p>
            <p className = "user-email">Email: {props.user.email}</p>
            <p className = "user-phone">Phone: {props.user.phone}</p>
            <p className = "user-balance">Balance: {props.user.balance}</p>
        </div>
    )
}