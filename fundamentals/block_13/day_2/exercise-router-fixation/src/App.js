import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/Users' render={(props) => <Users {...props} greetingMessage='Good Morning' />} />
          <Route path='/StrictAccess' render={(props) => <StrictAccess {...props} user={{userName:"joão", password:'1234'}} />} />
          <Route path='/About' component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter >
    );
  }
}

export default App;