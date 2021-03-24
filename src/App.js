import React from "react";
import "./App.css";
import "./styles/index.scss";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CentrePanel from "./components/Centre/CentrePanel";
import WebChat from "./components/WebChat/WebChat";
import GlobalErrorPopup from './components/GlobalErrorPopup/GlobalErrorPopup';

import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Success from './components/Result/Success';
import Failure from './components/Result/Failure';
// models
import NotificationModel from "./models/NotificationModel/NotificationModel"

// context
import NotificationContext from './contexts/NotificationContext';

function App() {
  const {show, status, message, title, ...service} = NotificationModel();

  return (
    <div className="App">
      <NotificationContext.Provider value={{show, status, message, title, service}}>
        <Header></Header>
        <CentrePanel></CentrePanel>
        <Footer></Footer>
        <WebChat></WebChat>
        <div className="lqe-modal-example"></div>
        <div className="lqe-modal-mixin"></div>
        <GlobalErrorPopup  
          status='ERROR' 
          message='you are back online.'
        ></GlobalErrorPopup>
      </NotificationContext.Provider>
    </div>
  );
}

export default App;
