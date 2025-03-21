import React from 'react';
import { useAuth } from './AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import Questions from './components/quiz/Questions';
import Results from './components/quiz/Results';
import WelcomePage from './route/pages/WelcomePage';
import ErrorPage from './route/pages/ErrorPage';
import LogInPage from './route/auth/LogInPage';
import SignUpPage from './route/auth/SignUpPage';
import DashBoard from './route/auth/DashBoard';


const AppRouter = ({ user, handleLogIn}) => {
  const PrivateRoute = ({ children }) => {
    const  currentUser  = useAuth();
    console.log("Current User in private route", currentUser)
    return currentUser ? children : <Navigate to="/log-in" />
  };
  return (

    <Routes>
      <Route path="/" exact element={<WelcomePage user={user} />} />
      <Route path="/log-in"  element={<LogInPage onLogIn={handleLogIn} />} />
      <Route path="/dashboard" element={<PrivateRoute><DashBoard user={user} /></PrivateRoute>}/>
      <Route path="/sign-up"  element={<SignUpPage />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/results" element={<Results />} />
      <Route path='/*' element={<ErrorPage />} />

    </Routes>

  )
}

export default AppRouter

