import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Questions from './pages/questions/Questions';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import OverlayCard from './components/cards/overlayCard/OverlayCard';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  QUESTIONS_ROUTE,
  HOME_ROUTE,
} from './routes';

function App() {
  const [burger, setBurger] = useState(true);
  return (
    <div className="App">
      <Navbar onBurgerClick={(e) => setBurger(e)} />
      {burger ? null : <OverlayCard />}
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={QUESTIONS_ROUTE} element={<Questions />} />
        <Route path={CONTACT_ROUTE} element={<Contact />} />
        <Route path={ABOUT_ROUTE} element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
