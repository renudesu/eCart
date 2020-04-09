import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import SignUp from './signup/signup';
import SiginIn from './signin/signin';
import AddBook from './admin/containers/addBook';
import BookList from './admin/containers/bookList';

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
          <Route path='/admin/addbook'>
          <AddBook/>
          </Route>
          <Route path='/admin/list'>
        <BookList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
