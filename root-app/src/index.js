import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let postData = [
    {id: 1, message: 'He, how are you?', likesCount: 0},
    {id: 2, message: 'It\'s my first post', likesCount: 23}]

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andtery'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},]
let messageData = [
    {id: 1, message: 'asd'},
    {id: 2, message: 'dsa'},
    {id: 3, message: 'qwe'},
    {id: 4, message: 'ewq'},]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App dialogsData={dialogsData} messageData={messageData} postData={postData}/>
);
