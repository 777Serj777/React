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

    let isValid = true;
     
    values.forEach(item => {
        if(!item.isValid) { isValid = false; return;}
    })

    isValid = (isValid) && (password === repeatPassword);
    
    return {
        type: 'CHECK_VALID',
        payload: {isValid}
    }
}
export const setUrl = (urlImg) => {

    return {
        type: 'SET_URL',
        payload: {urlImg}
    }
}

const crateAction = {
    addInfoUser,
    setValid,
    addPhotoUser,
    checkValid,
    setUrl  
}

export default crateAction; 