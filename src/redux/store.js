import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Howdy!', likesCount: '11'},
                {id: 2, post: 'It\'s my first post!', likesCount: '15'}
            ],
            friendsOnline: [
                {friend: 'Andrew'},
                {friend: 'Mark'},
                {friend: 'Johann'},
                {friend: 'Ann'}
            ],
            newPostText: 'Test',
        },


        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Peter'},
                {id: 2, name: 'Mary'},
                {id: 3, name: 'Mark'},
                {id: 4, name: 'Andrew'}

            ],

            dialogsMessages: [
                {id: 1, message: 'How are you?'},
                {id: 2, message: 'Everything is OK'},
                {id: 3, message: 'Perfect!'}

            ],
            newMessageBody: ""
        }
    },
    getState() {
        return this._state;
    },

    _rerenderTree() {
        console.log('State is changed')
    },
    subscribe(observer) {
        this._rerenderTree = observer;
    },
    dispatch(action) {
        this._state.profilePage= profileReducer(this._state.profilePage, action);
        this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action);
        this._rerenderTree(this._state);
    }
}

export default store;
