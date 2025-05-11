import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Navigat from './components/navigation/Navigat';

function App() {
  return (
    <div className="App">
    <Header/>
    <Navigat/>
    <Hero/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
