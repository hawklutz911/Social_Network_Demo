import React from 'react';
import PostContainer from "./Post/PostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
    <div><ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    <PostContainer/>
             </div>)
}
export default Profile;