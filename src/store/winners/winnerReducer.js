import actionType from './actionType'


const initState = {

    allWinner: [],
    isWinner: false,
    currentWinner: {
        name: '',
        secondName: '',
        id: '',
        time: ''

    }
}


const winnerReducer = (state = initState, action) => {
    
    const {type, payload} = action;

    return ({

        [actionType.CHOOSE_WINNER]() {
         
            const {arrParticipants} = payload; 

            const idWinner = arrParticipants.map(item => {

                let milisecons = item.time.split(/[\:\.]/g).reduce((accumulator, nValue, index) => {

                    nValue = Number(nValue)
                       
                    accumulator += (index === 0) && (nValue * 60 * 60 * 1000) 
                    || (index === 1) && (nValue * 60 * 1000) 
                    || (index === 2) && (nValue * 1000) 
 
                    return accumulator; 
                
                }, 0);

                return {
                    id: item.id,
                    time: milisecons
                }
            }).sort((a, b) => a.time - b.time)[0].id;
            
         
            const [winner] = arrParticipants.filter(win => win.id === idWinner);
         
            return {
                isWinner: true,
                allWinner: [
                    ...state.allWinner,
                    winner
                ],
                currentWinner: {
                    ...winner
                }
            }   
        },
        [actionType.CHANGE_IS_WINNER_TO_FALSE](){

            return {
                ...state,
                isWinner: false
            }
        }

    }[type] || (()=>state))()
}

export default winnerReducer;