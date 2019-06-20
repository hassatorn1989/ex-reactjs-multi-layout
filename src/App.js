import React from 'react';
import logo from './logo.svg';
import './App.css';
// import layout from './components/layout/layout';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import login from './components/login';
import Backend from './components/layout/Backend';
import mainpage from './components/mainpage';
import Frontend from './components/layout/Frontend';
import page1 from './components/page1';
import page2 from './components/page2';

function App() {
  return (
    <div className="App">
       <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              <Route path="/login" component={login} />
              <Backend  path="/mainpage" component={mainpage} />
              <Frontend  path="/page1" component={page1} />
              <Frontend  path="/page2" component={page2} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
