import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <h2>Home</h2>
      <Link to="/login">Login</Link>
      <Link to="/register">Cadastro</Link>
    </section>
  );
}
