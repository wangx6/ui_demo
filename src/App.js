import './App.css';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CentrePanel from './components/Centre/CentrePanel';
import GlobalErrorPopup from './components/GlobalErrorPopup/GlobalErrorPopup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CentrePanel>
      </CentrePanel>
      <Footer></Footer>
      <GlobalErrorPopup></GlobalErrorPopup>
    </div>
  );
}

export default App;
