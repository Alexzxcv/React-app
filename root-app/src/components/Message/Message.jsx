import React from "react";
import classes from "./Message.module.css";
import MessageItem from "./MessageItem/MessageItem";
import MessageTick from "./MessageTick/MessageTick";

const Message = (props) => {

    let state = props.message;

    let dialogsElement = state.dialogsData.map(d => <MessageItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messageData.map(m => <MessageTick message={m.message} key={m.id} id={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div className={classes.blockSend}>
                    <div>
                        <textarea onChange={onNewMessageChange}
                                  value={newMessageBody}
                                  placeholder='Send message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;
