import actionType from './actionType'

const initState = {
    arrParticipants: [],
}

const participantsReducer = (state = initState, action) => {

    const {type, payload} = action;

    return ({

        [actionType.REMOVE_PARTICIPANT](){
            
            const {id} = payload;
        
            let arrParticipants = state.arrParticipants.filter(item => item.id !== id);
      
            return{

                arrParticipants,
         
            }
        },
        [actionType.CLEAR_ARR_PARTICIPANT](){
            
            return {
                arrParticipants: []
            }
        },
        [actionType.ADD_PARTICIPANT](){
      
            return{

                arrParticipants: [
                    ...state.arrParticipants,
                    payload
                ],
               
               
            }
        }

    }[type] || (() => state))()
}

 export default participantsReducer;


