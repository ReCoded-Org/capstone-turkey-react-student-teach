import './App.css';
import Mission from './components/Mission';
import BookmarkPage from './pages/BookMarkPage/BookmarkPage';

function App() {
  return (
    <div className="App">
      <p className="hidden">learn</p>
      <BookmarkPage />
      <Mission/>
    </div>
  );
}

export default App;
