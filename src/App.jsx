import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Questions from './pages/questions/Questions';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import OverlayCard from './components/cards/overlayCard/OverlayCard';
// import SignIn from './components/modals/SignIn/SignIn';
// import SignUp from './components/modals/SignUp/SignUp';
// import AddQuestion from './components/modals/AddQuestion/AddQuestion';

function App() {
  const [burger, setBurger] = useState(true);
  return (
    <div className="App">
      <Navbar onBurgerClick={(e) => setBurger(e)} />
      {burger ? null : <OverlayCard />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addQuestion" element={<AddQuestion />} /> */}
      </Routes>
    </div>
  );
}

export default App;
