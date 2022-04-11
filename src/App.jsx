/* import logo from './logo.svg';
import { Counter } from './features/counter/Counter'; */
import './App.css';
// eslint-disable-next-line no-unused-vars
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Navbar />
    </div>
  );
}

export default App;
