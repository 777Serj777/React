import React, {useContext} from 'react';
import {RegistrationContext} from '../../context'

export const SuccessfulRegistration = (props) => {

    const {state: {infoUser}} = useContext(RegistrationContext);
   
    return (
      
        <div className = {`${props.classParent}__info-user`}>
            <h2>Спасибо за регистрацию</h2>
            <div className = {`${props.classParent}__photo-user`}><img src={infoUser.urlImg}/></div>
            <h3>Контактная информация</h3>
            <ul className = "userInfoList">
                <li className = "">Имя: {infoUser.name}</li>
                <li className = "">Фамилия: {infoUser.surname}</li>
                <li className = "">Email: {infoUser.email}</li>
                <li className = "">Город: {infoUser.city}</li>
                <li className = "">Улица: {infoUser.street}</li>
                <li className = "">Дом: {infoUser.house}</li>
            </ul>
        </div>
     
    )

}