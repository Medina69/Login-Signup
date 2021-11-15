import React from 'react';
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/LogIn'>
          <LogIn />
        </Route>
        <Route path='/SignUp'>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;