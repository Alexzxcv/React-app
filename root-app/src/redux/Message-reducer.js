const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andtery'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},],
    messageData: [
        {id: 1, message: 'asd'},
        {id: 2, message: 'dsa'},
        {id: 3, message: 'qwe'},
        {id: 4, message: 'ewq'},],
    newMessageBody: '',
}

const messageReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
    };
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        case
        SEND_MESSAGE:
            let body = {
                id: 5,
                message: state.newMessageBody,
            }
            stateCopy.messageData.push(body);
            stateCopy.newMessageBody = '';
            return stateCopy;
        default:
            return state
    }
}
export const addMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body,}
}
export default messageReducer;