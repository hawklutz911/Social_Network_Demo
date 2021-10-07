import React from "react";
import s from "./Dialogsmodule.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {Textarea} from "../common/FormControls/FormControls";

const maxLength50 = maxLengthCreator(50)

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogs = state.dialogsData.map (d => <DialogItem name={d.name} id={d.id} key ={d.key}/> );
    let messages = state.dialogsMessages.map(m => <Message message = {m.message} key ={m.key}/> );


let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
}
if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
            <div className={s.item}>
                <div>{dialogs}</div>
            <div>{messages}</div>
        <AddMessageFormRedux onSubmit ={addNewMessage}/>
            </div>
    )
}
const AddMessageForm =(props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                name="newMessageBody"
                       validate={[required, maxLength50]}
                placeholder="Enter your message"/>
            </div>
            <div><button>Add a New Message</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;