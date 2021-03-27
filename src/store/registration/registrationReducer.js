import actionType from './actionType'

const initState = {
    
    isParticip: false,

    validData:false,

    participant: {
        id: '',
        name: '',
        secondName: ''
    }
}

const registrationReducer = (state = initState, action) => {

    const {type, payload} = action;

    return ({
    
     
        [actionType.SET_VALIDATION](){
            return {
                ...state,
                ...payload
            }
        },

        [actionType.RESET_PARTICIPANT](){
            
            return{
                ...initState
            }
        },

        [actionType.REGISTER_PARTICIPANT](){

            let id =  Math.floor(Math.random() * (100000 - 10000) + 10000);

            return {

                ...state,              
                isParticip: true,

                participant: {
                    ...payload,
                    id
                }
            }
        }
     

    }[type] || (() => state))()
}

 export default registrationReducer;


