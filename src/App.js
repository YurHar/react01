import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/dialogs" element={<DialogsContainer otherProp={DialogsContainer}  />} />
            <Route path="/profile" element={<Profile otherProp={Profile}  />} />
            <Route path="/users" element={<UsersContainer otherProp={Users} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
