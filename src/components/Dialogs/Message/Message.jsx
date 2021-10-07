import React from 'react';
import s from '../Dialogsmodule.css'


const Message =(props) =>{
    return(
        <div className={s.messages}>{props.message}</div>
    )

}

export default Message;