import './App.css';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CentrePanel from './components/Centre/CentrePanel';
import CookieBanner from './components/CookieBanner/CookieBanner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CentrePanel>
      </CentrePanel>
      <Footer></Footer>
      <CookieBanner></CookieBanner>
    </div>
  );
}

export default App;
