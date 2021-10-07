const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [{id: 1, name: 'Peter'},
        {id: 2, name: 'Mary'},
        {id: 3, name: 'Mark'},
        {id: 4, name: 'Andrew'}],

    dialogsMessages: [{id: 1, message: 'How are you?'},
        {id: 2, message: 'Everything is OK'},
        {id: 3, message: 'Perfect!'}
    ]
};


const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
             return {...state,
                 dialogsMessages: [...state.dialogsMessages, {id: 5, message: body}]
             };
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;