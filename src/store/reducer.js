import actionType from './actionType';


export default function  reduser(state, action){

    
    const {type, payload} = action;
    const {infoUser} = state;
    const {valid} = state;

    return {

        [actionType.CHANGE_THEME](){
       
            return { 
                ...state, 
                ...payload
                
            }
         },

        [actionType.SET_URL](){

            return { 
                ...state, 
                infoUser: {
                    ...infoUser,
                    ...payload
                }
            }
         },

        [actionType.CHECK_VALID](){

            return { 
                ...state, 
                ...payload
            }
         },
        [actionType.SET_VALID](){

            return { 
                ...state, 
                valid:{
                    ...valid,
                    ...payload
                }
            }
         },
        [actionType.ADD_INFO_USER](){
          
           return { ...state, 
                infoUser: {
                ...infoUser,
                ...payload.value 
                } 
            }
        },
        [actionType.ADD_PHOTO_USER](){

           return { 
               ...state, 
                infoUser: {
                ...infoUser,
                ...payload
                } 
            }
        },
        [actionType.SAVE_USER](){
           return {
             
                users: [
                    ...state.users,
                    {...infoUser}
                ] 
           } 
        },
        [actionType.NEXT_STEP](){
            return {
                ...state,
                step: state.step + 1
            }
        },
        [actionType.PREV_STEP](){
            return {
                ...state,
                step: state.step - 1
            }
        },
        
        
    }[type]();
   
    
}