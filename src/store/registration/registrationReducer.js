import actionType from './actionType'

const initState = {
    
    isParticip: false,

    participant: {
        id: '',
        name: '',
        secondName: ''
    }
}

const registrationReducer = (state = initState, action) => {


    const {type, payload} = action;

    return ({

        [actionType.REGISTER_PARTICIPANT](){
            return {
                ...payload
            }
        }
     

    }[type] || (() => state))()
}

 export default registrationReducer;


