import validation from '../validation'

export const addInfoUser  = (value) => { 

    return {
        type: 'ADD_INFO_USER',
        payload: {value}
    }
}
export const setValid = (value) => {

    let [key] = Object.keys(value);
    let isValid = validation(key, value[key])
    
    return {
        type: 'SET_VALID',
        payload: {[key]: {isValid}}
    }
}
export const addPhotoUser = (value) => {

    let url =  URL.createObjectURL(value);

    return {
        type: 'ADD_PHOTO_USER',
        payload: {urlImg: url}
    }
}
export const checkValid = (listValid, {password, repeatPassword}) => {

    let values = Object.values(listValid);

    let isAuth = true;
     
    values.forEach(item => {
        if(!item.isValid) { isAuth = false; return;}
    })

    isAuth = (isAuth) && (password === repeatPassword);
    
    return {
        type: 'CHECK_VALID',
        payload: {isAuth}
    }
}
export const setUrl = (urlImg) => {

    return {
        type: 'SET_URL',
        payload: {urlImg}
    }
}
export const changeTheme = (themeDark) => {
    
    
    themeDark = !themeDark;
    
    return {
        type: 'CHANGE_THEME',
        payload: {themeDark}
    }
}

const createAction = {
    addInfoUser,
    setValid,
    addPhotoUser,
    checkValid,
    setUrl,
    changeTheme  
}

export default createAction; 