import React from 'react';
import PostContainer from "./Post/PostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
    <div><ProfileInfo profile={props.profile}
                      status={props.status}
                      updateStatus={props.updateStatus}
                      isOwner = {props.isOwner}
                      savePhoto={props.savePhoto}
                      saveProfile={props.saveProfile}/>
    <PostContainer/>
             </div>)
}
export default Profile;