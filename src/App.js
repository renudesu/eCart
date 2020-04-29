import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import SignUp from './signup/signup';
import SiginIn from './signin/signin';
import AdminDashboard from './admin/containers/Dashboard/adminDashboard';
import UserDashboard from './user/components/dashboard/userDashboard';
 
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {ecartReducer} from './store/reducer';
 
//  function sampleReducer(){
//    return {name:'renu'}
//  }

 const store=createStore(ecartReducer,composeWithDevTools());
// import UserHeader from './user/components/Header/userHeader';
function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>

          <Route exact path="/">
            <Redirect
              to={{
                pathname: "/signin"
              }}
            />
          </Route>
          <Route path='/signin'>
            <SiginIn />
          </Route>
          <AdminAuthentication path='/admin'>
            <AdminDashboard />
          </AdminAuthentication>


          <UserAuthentication path='/user'>
            <UserDashboard />
          </UserAuthentication>

        
        </Switch>
      </div>
    </Router>
    </Provider>
    
  );
}

function UserAuthentication(props) {
  const role = localStorage.getItem('role');
  if (role === 'user') {
    return (
      <Route path={props.path}>
        {props.children}
      </Route>
    )
  }
  else {
    localStorage.clear();
    return (
      <Redirect
        to={{
          pathname: "/signin"
        }} />
    )
  }
}
function AdminAuthentication(props) {
  const role = localStorage.getItem('role');
  if (role === 'admin') {
    return (
      <Route path={props.path}>
        {props.children}
      </Route>
    )
  }
  else {
    localStorage.clear();
    return (
      <Redirect to={{ pathname: "/signin" }} />
    )
  }
}
export default App;


