import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <h2>Home</h2>
      <Link to="/login" className='link'>Login</Link>
      <Link to="/register" className='link'>Cadastro</Link>
    </section>
  );
}
