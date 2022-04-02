import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
