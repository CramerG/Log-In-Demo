import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <h1>Log-In Demo</h1>
      <Router>
        <SignUp path="/"/>
        <LogIn path="/login"/>
        <UserList path="/users"/>
      </Router>
    </div>
  );
}

export default App;
