import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Footer/>
      </header>
    </div>
  );
}

export default App;