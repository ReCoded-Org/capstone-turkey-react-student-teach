import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import Question from './pages/singleQuestions/question';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  QUESTIONS_ROUTE,
  QUESTION_ROUTE,
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

  const signIn = useSelector((state) => state.signIn);
  const isSuccess = signIn.user.status;
  const isUser = signIn.user.userInfo;
  const isUserSignedUp = signIn.signUp.isSignedUp;

  return (
    <div className="App">
      <Navbar onBurgerClick={(e) => setBurger(e)} />
      {burger ? null : <OverlayCard />}
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={QUESTION_ROUTE} element={<Question />} />
        <Route path={QUESTIONS_ROUTE} element={<Questions />} />
        <Route path={CONTACT_ROUTE} element={<Contact />} />
        <Route path={ABOUT_ROUTE} element={<About />} />
        <Route
          path={USERPROFILE_ROUTE}
          element={
            isSuccess === 'success' ||
            signIn.signUp.status === 'success' ||
            isUser.firstName ||
            isUserSignedUp.firstName ? (
              <UserProfile />
            ) : (
              <Navigate to="/" />
            )
          }
        />
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
