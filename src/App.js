import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route,
} from "react-router-dom";
import SignUp from './components/sign.up/signup';
import SiginIn from './components/sign.in/signin';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/signin'>
           <SiginIn/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
