import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { emailChange, passwordChange } from '../redux/actions';

function Login({ email, emailChange, password, passwordChange }) {
  return (
    <section>
      <h2>Login</h2>
      <form>
        <label>
          E-mail:
          <input
            type="text"
            value={email}
            onChange={({ target }) => emailChange(target.value)}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={({ target }) => passwordChange(target.value)}
          />
        </label>
        <button type="button">
          { (email && password) ? <Link to='/users'>Entrar</Link> : 'Entrar' }
        </button>
      </form>
    </section>
  );
}

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
  password: state.loginReducer.password,
});

const mapDispatchToProps = (dispatch) => ({
  emailChange: (value) => dispatch(emailChange(value)),
  passwordChange: (value) => dispatch(passwordChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
