import React from "react";
import classes from "../Message.module.css";

const MessageTick = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

export default MessageTick;
