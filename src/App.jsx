import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Questions from './pages/questions/Questions';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import UserProfile from './pages/userProfile/UserProfile';
import OverlayCard from './components/cards/overlayCard/OverlayCard';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import Footer from './components/Footer/Footer';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  QUESTIONS_ROUTE,
  HOME_ROUTE,
  USERPROFILE_ROUTE,
} from './routes';

function App() {
  const [burger, setBurger] = useState(true);
  const [timeOut, setTimeOut] = useState(false);
  useEffect(() => {
    setInterval(() => {
      return setTimeOut(true);
    }, 5000);
  }, [timeOut]);

  // const signIn = useSelector((state) => state.signIn);
  // const isSuccess = signIn.user.status;
  // const isNotFoundUser = signIn.user.userInfo.error;
  // const isUser = signIn.user.userInfo;

  return (
    <div className="App">
      <Navbar onBurgerClick={(e) => setBurger(e)} />
      {burger ? null : <OverlayCard />}
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={QUESTIONS_ROUTE} element={<Questions />} />
        <Route path={CONTACT_ROUTE} element={<Contact />} />
        <Route path={ABOUT_ROUTE} element={<About />} />
        <Route path={USERPROFILE_ROUTE} element={<UserProfile />} />
        <Route
          path="*"
          element={timeOut ? <Navigate to="/" /> : <NotFoundPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
