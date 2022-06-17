//Packages
import React from "react";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

//Source files
import AuthPage from '../Auth/AuthPage';
import GetMatchPage from '../GetMatch/GetMatchPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import LandingPage from '../HomeScreen/LandingPage';

//Component
function PageRoutes(props){
    return <div>
        <Router>
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/profile' exact element={<ProfilePage />} />
          <Route path='/auth' exact element={<AuthPage />} />
          <Route path='/get-match' element={<GetMatchPage />} />
        </Routes> 
      </Router>
    </div>
}

export default PageRoutes;