import React, { useState } from "react";
import { useSelector } from "react-redux";
import Input from './components/Input'
import UserCard from './components/UserCard'
import Registration from './components/registration/Registration'
import Timer from './components/newTimer/Timer'
import WinnerInfo from "./components/WinnerInfo";


const mapDispatchToProps = dispatch => {

  return {
    setTime: value => {
        dispatch({type: 'SET_TIME', payload: {time: value}})
    }
  }
}

const Wrapper = () => {

  const [search, setSearch] = useState('');
  const participants = useSelector(store => store.participants.arrParticipants);

  return (
    <>
      <Input className = 'search-particip' onChange = {(e) => {setSearch(e.target.value)}}/>
      <div className = 'list-participants'>
         {
            participants.filter(particip => { 

              const {name, id} = particip;

              if(new RegExp(search).test(name) || new RegExp(search).test(id)) return true;
            
              return false;
            
            }).map(particip => <UserCard  {...particip}/>)
         }
      </div>
    </>
  )
}

function App(props) {

  const isParticip = useSelector(store => store.registration.isParticip)
  
  return (
    <div className = 'container-app'>
      <div className = 'column-first'>
        <Wrapper/>
      </div>
      <div className = 'column-second'>
        <div className = 'wrapper-particip'>
          {(isParticip) ? <Timer/> : <Registration/>} 
        </div>
        <WinnerInfo/>
      </div>
    </div>
  )

} 

export default App;
