import {profileAPI, usersAPI} from "../api/api";

const SEND_NEW_POST_TEXT = 'SEND_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [{id: 1, post: 'Howdy!', likesCount: '11'},
            {id: 2, post: 'It\'s my first post!', likesCount: '15'}],
    friendsOnline: [{friend: 'Andrew'},
        {friend: 'Mark'},
        {friend: 'Johann'},
        {friend: 'Ann'}
        ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_POST_TEXT: {
            let newPost = {id: 3, post: action.newPostText, likesCount: '0'};
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case SET_STATUS: {
            return {...state,
                status: action.status}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

default: return state;
}
}
export const sendNewPostCreator = (newPostText) => ({type: SEND_NEW_POST_TEXT, newPostText});
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
export const setStatus =(status) => ({type: SET_STATUS, status});
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
}

export const getStatus= (userId) => async (dispatch)=> {
    let response = await profileAPI.getStatus(userId)
    dispatch(getStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}

export default profileReducer;
