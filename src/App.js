import './App.css';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CentrePanel from './components/Centre/CentrePanel';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CentrePanel>
      </CentrePanel>
      <Footer></Footer>
    </div>
  );
}

export default App;
