import React from "react";
import classes from "../Message.module.css";
import {NavLink} from "react-router-dom";

const MessageItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default MessageItem;
