import actionType from './actionType'

const initState = {
    time: '00:00:00'
}

const timerReducer = (state = initState, action) => {


    const {type, payload} = action;

    return ({

        [actionType.SET_TIME](){
            return {
                ...payload
            }
        }
     

    }[type] || (() => state))()
}

 export default timerReducer;


