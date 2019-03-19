import './styles/index.scss';

import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Login from './pages/login';

const App = () => (
  <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>
);



render(<App/>, document.getElementById('app'));
