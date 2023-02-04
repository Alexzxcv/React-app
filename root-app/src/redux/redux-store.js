import {combineReducers, createStore} from "redux";
import messageReducer from "./Message-reducer";
import profileReducer from "./Profile-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    message: messageReducer,
});

let store = createStore(reducers);

export default store;