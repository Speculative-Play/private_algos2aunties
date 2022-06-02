import React, {Component} from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import './App.css';
import GetMatchPage from './GetMatch/_components/GetMatchPage';
import ProfilePage from './ProfilePage/_components/ProfilePage';
import AuthPage from './Login/_components/AuthPage';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' exact element={<ProfilePage />} />
            <Route path='/auth' exact element={<AuthPage />} />
            <Route path='/get-match' element={<GetMatchPage />} />
          </Routes>
    </Router>
    </div>
  );
}


export default App;
