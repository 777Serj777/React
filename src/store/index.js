import {createStore, combineReducers} from 'redux'
import participantsReducer from './participants/participantsReducer'
import registrationReducer from './registration/registrationReducer'

const rootReduceer = combineReducers({
    participants: participantsReducer,
    registration: registrationReducer
})

const store = createStore(rootReduceer);


export default store;

