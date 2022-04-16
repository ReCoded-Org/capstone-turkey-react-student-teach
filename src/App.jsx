import './App.css';
import BookmarkPage from './pages/BookMarkPage/BookmarkPage';
import About from './pages/AboutUs/About';
import Mission from './components/Mission';

function App() {
  return (
    <div className="App">
      <p className="hidden">learn</p>
      <Mission />
      <About />
    </div>
  );
}

export default App;
