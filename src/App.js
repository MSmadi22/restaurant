import React from 'react';
import './App.css';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom'


const App=()=>{
  return (
    <div className="App">
      <Switch>
        <Route component={Home} path="/home"/>
        <Route component={Login} path="/login"/>
      </Switch>
      <Redirect from='/*' to='/login'/>
    </div>
  );
}
export default withRouter(App);
