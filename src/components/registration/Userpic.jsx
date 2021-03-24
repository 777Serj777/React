import React, {useContext} from 'react';
import {RegistrationContext} from '../../context'
import createAction from '../../store/createAction';


let id = 0; 

let arrURL = [
    [
        '/img/avatars/bear.png',
        "/img/avatars/hacker.png",
        "/img/avatars/hacker.png",
        "/img/avatars/woman.png"
    ],
    [
        "/img/avatars/man.png",
        "/img/avatars/girl-two.png",
        "/img/avatars/bear.png",
        "/img/avatars/hacker.png" 
    ]
]
 export const Userpic = (props) => {
    
    const {dispatch} = useContext(RegistrationContext);

    return(

        arrURL.map(arr => {

            return (
                <div key = {'container'+id++} className = {`${props.classParent}__imgs`} >
                    {arr.map( url => <img key = {'image'+id++} src={url} onClick = {(e) => dispatch(createAction.setUrl(e.target.src))}/> )}
                </div>
            )
        })

    )
 } 