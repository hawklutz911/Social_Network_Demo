import profileReducer, {sendNewPostCreator} from "./profile-reducer";
import React from "react";



let state = {
posts: [
    {id: 1, post: 'Howdy!', likesCount: '11'},
    {id: 2, post: 'It\'s my first post!', likesCount: '15'}
]
};

it('renders without crashing', () => {
    let action = sendNewPostCreator("IT-Kamasutra");
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(2);
});

it('length should be correct', () => {
    let action = sendNewPostCreator("IT-Kamasutra");
    let newState = profileReducer(state, action);
    expect (newState.posts[2].post).toBe("IT-Kamasutra");
});