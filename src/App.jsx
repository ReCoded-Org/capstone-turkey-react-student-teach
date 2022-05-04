import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Questions from './pages/questions/Questions';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import UserProfile from './pages/userProfile/UserProfile';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import Footer from './components/Footer/Footer';
import SingleQuestion from './pages/SingleQuestion/SingleQuestion';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  QUESTIONS_ROUTE,
  QUESTION_ROUTE,
  HOME_ROUTE,
  USERPROFILE_ROUTE,
} from './routes';
import { fetchAllTutorSlice } from './redux/features/fetchAllTutorsSlice';

function App() {
  const userSignedIn = useSelector((state) => state.signIn.user.userInfo.id);
  const userSignedUp = useSelector(
    (state) => state.signIn.signUp.isSignedUp.id,
  );
  const [timeOut, setTimeOut] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      return setTimeOut(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [timeOut]);

  useEffect(() => {
    dispatch(fetchAllTutorSlice({ userId: userSignedIn || userSignedUp }));
  }, [userSignedIn, userSignedUp, dispatch]);

  const signIn = useSelector((state) => state.signIn);
  const isSuccess = signIn.user.status;
  const isUser = signIn.user.userInfo;
  const isUserSignedUp = signIn.signUp.isSignedUp;

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={QUESTION_ROUTE} element={<SingleQuestion />} />
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
