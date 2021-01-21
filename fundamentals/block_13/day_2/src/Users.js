import React from 'react';
import { Link } from 'react-router-dom';

const Users = ({ greetingMessage = 'Hi There', match}) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
    <p> User Id: {match.params.id}</p>
    <Link to='/'>Home</Link>
  </div>
);

export default Users;