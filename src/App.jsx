import {Header} from "./component/Header";
import {ListUsers} from "./component/Users";
import {ModalWindow} from "./component/ModalWindow";
import {userData} from "./bd/userData";
import React, {useState, useEffect} from "react";


function Wrapper(props) {

  const {arrUsers}  = props;
  const [state, setState] = useState({age: 'any'});
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(arrUsers);

  const cbFilterUsers = () => {
  
    let users =  arrUsers.filter(user => {

      for (const key in state) {

        switch(key){
          case 'name': {
            let reg = new RegExp(`^${state[key]}`, 'i');
            if(reg.test(user.name)) break;
            return false; 
          }
          case 'age': {
            if(+state[key] === user.age) break;
            if(state[key] === 'any') break;
            return false;
          }
        }      
      }
      return true;
    });

    setUsers(users);
  }

  useEffect(cbFilterUsers, [state]);
 
  const handleSearchUserByAge = e => {
    setState({ ...state, age : e.target.value}); 
  }
  
  const handleSearchUserByName = e => {
    setState({...state, name: e.target.value});
  }
  const handleResetState = () => {
    setState({});
  }
  
  const handelInfoUser = user => {    
    setUser(user);   
  }
  const handelCloseModalWindow = () => {
    setUser(undefined);
  }

  return (
    <div className = "wrapper">
      <Header 
        inputValue = {state.name || ""} 
        users = {userData} 
        reset = {handleResetState} 
        searchByAge = {handleSearchUserByAge} 
        searchByName = {handleSearchUserByName}
      />
      <div className = "content">
        <ListUsers clickUser = {handelInfoUser} users = {users}/>
        {(user) ? <ModalWindow user = {user} closeWindow = {handelCloseModalWindow}/> : null}
      </div>
    </div>
  )
}

function App() {

  return (
    <Wrapper arrUsers = {userData}/>
  )

} 

export default App;
