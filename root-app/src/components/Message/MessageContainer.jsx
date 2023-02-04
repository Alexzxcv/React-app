import React from "react";
import {addMessageCreator, updateNewMessageBodyCreator} from "../../redux/Message-reducer";
import Message from "./Message";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        message: state.message,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(addMessageCreator())
        },
        onNewMessageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;
