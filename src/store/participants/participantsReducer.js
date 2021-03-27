import actionType from './actionType'

const initState = {
    arrParticipants: [],
    amountParticipants: 0
}

const participantsReducer = (state = initState, action) => {

    const {type, payload} = action;

    return ({

        [actionType.REMOVE_PARTICIPANT](){
            
            const {id} = payload;
        
            let arrParticipants = state.arrParticipants.filter(item => item.id !== id);
      
            return{

                arrParticipants,
                amountParticipants:  state.amountParticipants - 1
               
            }
        },
        [actionType.ADD_PARTICIPANT](){
      
            return{

                arrParticipants: [
                    ...state.arrParticipants,
                    payload
                ],
                amountParticipants: 1 + state.amountParticipants
               
            }
        }

    }[type] || (() => state))()
}

 export default participantsReducer;


