import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import s from "../../Profile.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
        <Field name="newPostText" component={Textarea}  validate={[required, maxLength10]} placeholder={"Enter your message"}/>
        </div>
        <div><button>Post Your Message</button></div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: "profileAddPost"}) (AddNewPostForm)

const Post = (props) => {
    let postsElements = props.posts.map(p => <MyPosts post={p.post} likesCount={p.likesCount}/>);
    let friendsOnline = props.friendsOnline.map(p => <MyPosts post={p.friend}/>);

    let addNewPost = (values) => {
        props.addNewPost(values.newPostText);

}

    return (
        <div>
            <AddNewPostFormRedux onSubmit = {addNewPost}/>
            <div>{postsElements}</div>
            <div>{friendsOnline}</div>

        </div>)
}



export default Post