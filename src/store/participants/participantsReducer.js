import actionType from './actionType'

const initState = {
    arrParticipants: []
}

const participantsReducer = (state = initState, action) => {


    const {type, payload} = action;

    return ({

        [actionType.ADD_USER](){
            return{

                ...state,
                users: [
                    ...state.users,
                    ...payload
                ]
            }
        }

    }[type] || (() => state))()
}

 export default participantsReducer;


