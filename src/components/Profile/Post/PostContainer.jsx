import React from "react";
import {sendNewPostCreator} from "../../../redux/profile-reducer";
import Post from "./Post";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
            return {
                posts: state.profilePage.posts,
                friendsOnline: state.profilePage.friendsOnline,
                newPostText: state.profilePage.newPostText
            }
        }
        const mapDispatchToProps =(dispatch) => {
            return {
                addNewPost: (newPostText) => {
                dispatch(sendNewPostCreator(newPostText));
                }
            }
            }
        const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

        export default PostContainer;