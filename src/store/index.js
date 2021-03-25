import {createStore, combineReducers} from 'redux'
import participantsReducer from './participants/participantsReducer'
import timerReducer from './timer/timerReducer'
import registrationReducer from './registration/registrationReducer'

const rootReduceer = combineReducers({
    participants: participantsReducer,
    timer: timerReducer,
    registration: registrationReducer
})

const store = createStore(rootReduceer);


export default store;

