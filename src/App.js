import React from 'react'
import './App.css';
import './index.scss';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CentrePanel from './components/Centre/CentrePanel';
import WebChat from './components/WebChat/WebChat';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <CentrePanel>
      </CentrePanel>
      <Footer></Footer>
      <WebChat></WebChat>
    </div>
  );
}

export default App; 
