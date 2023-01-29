import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Message from "./components/Message/Message";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile postData={props.postData}/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/messages/:id' element={<Message dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/news' element={<News/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/music' element={<Music/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
