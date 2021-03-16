import React from "react";
import "./App.css";
import "./styles/index.scss";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CentrePanel from "./components/Centre/CentrePanel";
import WebChat from "./components/WebChat/WebChat";
import Webchatx from "./components/Webchatx/Webchatx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CentrePanel></CentrePanel>
      <Footer></Footer>
      <WebChat></WebChat>

      <div className="lqe-wctx-p">
        <div className="lqe-wctx-s">
          <Webchatx></Webchatx>
        </div>
      </div>

      <div className="lqe-modal-example"></div>
      <div className="lqe-modal-mixin"></div>
    </div>
  );
}

export default App;
