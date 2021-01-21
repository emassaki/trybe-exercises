import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const StrictAccess = ({ user }) => {
  const { userName, password } = user;
  if (userName !== 'joão' || password !== '1234') {
    alert('Access denied!')
    return <Redirect to='/Home' />
  }
  return (
    <div>
      <p> Welcome, João! </p>
      
      <Link to='/'>Home</Link>
    </div>
  )
};

export default StrictAccess;