import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
const App=()=>{
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Redirect from="/" to = "/home"/>
      </Switch>
    </React.Fragment>
  )
}
export default App;