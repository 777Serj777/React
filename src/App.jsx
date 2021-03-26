import React from "react";
import { connect, useSelector } from "react-redux";
import Input from './components/Input'
import UserCard from './components/UserCard'
import Registration from './components/registration/Registration'
import Timer from './components/newTimer/Timer'
import WinnerInfo from "./components/WinnerInfo";


const mapStateToProps = store => {

  return{
    timer: store.timer.time
  }
}

const mapDispatchToProps = dispatch => {

  return {
    setTime: value => {
        dispatch({type: 'SET_TIME', payload: {time: value}})
    }
  }
}

const TimerWithState = connect(mapStateToProps, mapDispatchToProps)(Timer)

function App(props) {

  const isParticip = useSelector(store => store.registration.isParticip)
  const participants = useSelector(store => store.participants.arrParticipants);

  return (
    <div className = 'container-app'>
      <div className = 'column-first'>
         <Input className = 'search-particip'/>
         <div className = 'list-participants'>
            {participants.map(particip => <UserCard particip = {particip}/>)}
         </div>
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
