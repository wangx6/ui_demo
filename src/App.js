import './App.css';
import CentrePanel from './components/Centre/CentrePanel';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CentrePanel></CentrePanel>
      <Footer></Footer>
    </div>
  );
}

export default App;
