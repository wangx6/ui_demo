import React from "react";
import "./App.css";
import "./styles/index.scss";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CentrePanel from "./components/Centre/CentrePanel";
import WebChat from "./components/WebChat/WebChat";

import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import Success from './components/Result/Success';
import Failure from './components/Result/Failure';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>  
      <Switch>
      <Route exact path ="/" component={CentrePanel} />
      <Route path="/success" exact component={() => <Success/> }/>
      <Route path="/fail" exact component={() => <Failure/> } />
      </Switch>
      </BrowserRouter>
      <Footer/>
      <WebChat></WebChat>
      
      <div className="lqe-modal-example"></div>
      <div className="lqe-modal-mixin"></div>
    </div>
  );
  }

export default App; 
