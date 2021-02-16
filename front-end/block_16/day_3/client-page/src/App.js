import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Login, Register, Users } from './pages';

import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Client</h1>
        <Link to='/'>Home</Link>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
