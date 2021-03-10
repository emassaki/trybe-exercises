import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeRestered } from '../redux/actions';

class Users extends React.Component {
  renderEmpty = () => {
    return <h3>Login não efetuado</h3>;
  };

  renderUsers = (users) => {
    if (users.length === 0) return <h3>Nenhum usuário cadastrado</h3>;
    const { remove } = this.props;
    return users.map((user, index) => (
      <div key={index}>
        <p>Nome: {user.name}</p>
        <p>E-mail: {user.email}</p>
        <button
          type="button"
          onClick={() => remove({ name: user.name, email: user.email })}
        >
          X
        </button>
      </div>
    ));
  };

  compare = (a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

  constructor() {
    super();
    this.state = {
      sorted: false,
    };
  }

  render() {
    const { sorted } = this.state;
    const { email, password, users } = this.props;
    const usersList = sorted ? [...users].sort(this.compare) : users;
    return (
      <section className='users'>
        <h2>Usuários Cadastrados</h2>
        <button type="button" onClick={() => this.setState({ sorted: true })}>
          Ordenar A-Z
        </button>
        <button type="button" onClick={() => this.setState({ sorted: false })}>
          Ordenar Normalmente
        </button>
        {!email || !password ? this.renderEmpty() : this.renderUsers(usersList)}
        <button type="button">
          <Link to="/register">Cadastrar Novos</Link>{' '}
        </button>
        <button type="button">
          <Link to="/login">Login</Link>{' '}
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
  password: state.loginReducer.password,
  users: state.registerReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (value) => dispatch(removeRestered(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
