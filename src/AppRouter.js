import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './route/pages/Home';

const AppRouter = () => {
  return (
    
        <Routes>
            <Route path="/home-page" element={<Home/>}/>
        </Routes>
  
  )
}

export default AppRouter

