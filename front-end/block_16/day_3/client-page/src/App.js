import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Home, Login, Register, Users } from './pages';

import { AiFillHome } from 'react-icons/ai';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className='header'>
          <h1>Client</h1>
          <Link to="/" className="link">
            <AiFillHome />
          </Link>
        </header>
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
