import {Header} from "./component/Header";
import {ListUsers} from "./component/Users";
import {ModalWindow} from "./component/ModalWindow";
import {userData} from "./bd/userData";
import { useState} from "react";


function Wrapper(props) {

  const {arrUsers}  = props;
  const [state, setState] = useState({});
  const [user, setUser] = useState(undefined);

  let users = arrUsers.filter(user => {

      for (const key in state) {

        switch(key){
          case 'name': {
            let reg = new RegExp(`^${state[key]}`, 'i');
            if(reg.test(user.name)) break;
            return false; 
          }
          case 'age': {
            if(+state[key] === user.age) break;
            return false;
          }
        }      
      }
      return true;
  });
 
  function searchUserByAge(e) {
    setState({ ...state, age : e.target.value}); 
  }
  
  function searchUserByName(e) {
    setState({...state, name: e.target.value});
  }
  function resetState() {
    setState({});
  }
  
  function infoUser(user) {    
    setUser(user);   
  }
  function closeModalWindow() {
    setUser(undefined);
  }

  return (
    <div className = "wrapper">
      <Header inputValue = {state.name || ""} users = {userData} reset = {resetState} searchByAge = {searchUserByAge} searchByName = {searchUserByName}/>
      <div className = "content">
        <ListUsers clickUser = {infoUser} users = {users}/>
        {(user) ? <ModalWindow user = {user} closeWindow = {closeModalWindow}/> : ""}
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
