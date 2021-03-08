import {Header} from "./component/Header";
import {ListUsers} from "./component/Users";
import {ModalWindow} from "./component/ModalWindow";
import {userData} from "./bd/userData";
import React, {useState, useEffect} from "react";


function Wrapper(props) {

  const {arrUsers}  = props;
  const [dataForFilter, setdataForFiltere] = useState({age: 'any'});
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(arrUsers);

  const cbFilterUsers = () => {
  
    let users =  arrUsers.filter(user => {

      for (const key in dataForFilter) {

        switch(key){
          case 'name': {
            let reg = new RegExp(`^${dataForFilter[key]}`, 'i');
            if(reg.test(user.name)) break;
            return false; 
          }
          case 'age': {
            if(+dataForFilter[key] === user.age) break;
            if(dataForFilter[key] === 'any') break;
            return false;
          }
        }      
      }
      return true;
    });

    setUsers(users);
  }

  useEffect(cbFilterUsers, [dataForFilter]);
 
  const handleSearchUserByAge = e => {
    setdataForFiltere({ ...dataForFilter, age : e.target.value}); 
  }
  
  const handleSearchUserByName = e => {
    setdataForFiltere({...dataForFilter, name: e.target.value});
  }
  const handleResetState = () => {
    setdataForFiltere({});
  }
  
  const handleInfoUser = user => {    
    setUser(user);   
  }
  const handleCloseModalWindow = () => {
    setUser(undefined);
  }

  return (
    <div className = "wrapper">
      <Header 
        inputValue = {dataForFilter.name || ""} 
        users = {userData} 
        reset = {handleResetState} 
        searchByAge = {handleSearchUserByAge} 
        searchByName = {handleSearchUserByName}
      />
      <div className = "content">
        <ListUsers clickUser = {handleInfoUser} users = {users}/>
        {(user) ? <ModalWindow user = {user} closeWindow = {handleCloseModalWindow}/> : null}
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
