import profileReducer from "./Profile-reducer";
import messageReducer from "./Message-reducer";

let store = {
    _state: {
        profile: {
            postData: [
                {id: 1, message: 'He, how are you?', likesCount: 0},
                {id: 2, message: 'It\'s my first post', likesCount: 23}],
            newPostText: '',
        },
        message: {
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
    },
    _rerenderEntireTree() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.message = messageReducer(this._state.message, action);
        this._rerenderEntireTree(this._state);
    }
}

export default store;
