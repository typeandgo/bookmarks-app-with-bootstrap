import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/account" component={ Account } />
              <Route component={ NotFound } />
            </Switch>
          </Main>
        </div>
      </Router>
      
    );
  }
}

export default App;
