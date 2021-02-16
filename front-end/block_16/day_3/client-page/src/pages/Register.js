import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendRegister } from '../redux/actions';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
    const { register } = this.props;
    const { name, email, age } = this.state;
    if (!name || !email || !age) return;
    register({ name, email, age });
    this.setState({
      name: '',
      email: '',
      age: '',
    });
  }

  render() {
    const { name, email, age } = this.state;
    return (
      <section>
        <h2>Cadastre o Cliente</h2>
        <form>
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
          <label>
            E-mail:
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
          <label>
            Idade:
            <input type="text" name="age" value={age} onChange={this.handleChange} />
          </label>
        </form>
        <button type="button" onClick={() => this.handleClick()}>
          Registrar
        </button>
        <button type="button">
          <Link to='/users'>Usuários</Link>
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  register: (value) => dispatch(sendRegister(value)),
});

export default connect(null, mapDispatchToProps)(Register);
