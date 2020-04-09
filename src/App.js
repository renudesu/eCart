import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import SignUp from './signup/signup';
import SiginIn from './signin/signin';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/signin'>
            <SiginIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
