import React from "react";
import classes from "./Message.module.css";
import MessageItem from "./MessageItem/MessageItem";
import MessageTick from "./MessageTick/MessageTick";

const Message = (props) => {


    let dialogsElement = props.dialogsData.map(d => <MessageItem name={d.name} id={d.id}/>);
    let messagesElements = props.messageData.map(m => <MessageTick message={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Message;
