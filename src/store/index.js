import {createStore, combineReducers} from 'redux'
import participantsReducer from './participants/participantsReducer'
import registrationReducer from './registration/registrationReducer'
import winnerRaducer from './winners/winnerReducer'

const rootReduceer = combineReducers({
    participants: participantsReducer,
    registration: registrationReducer,
    winner: winnerRaducer
})

const store = createStore(rootReduceer);


export default store;

