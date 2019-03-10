import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main/Main';
import Header from './Header/Header';
import Receipt from './Receipt/Receipt';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route path="/receipt" component={Receipt} />
        <Route path="/:filter?" component={Main} />
      </Switch>
    </div>
  </Router>
);

export default App;
