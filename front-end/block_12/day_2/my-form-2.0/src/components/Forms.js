import React from 'react'

import PersonalForms from './PersonalForms';
import ProfissionForms from './ProfissionForms';

class Forms extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      CPF: '',
      address: '',
      city: '',
      resume: '',
      role: '',
      roleDescription: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    let { value, name } = target
    
    if(name === 'name') value = value.toUpperCase();

    if(name === 'address') value = this.validateAddress(value);

    this.setState({
      [name]: value
    })
  }

  validateAddress(address) {
    return address.replace(/[^\w\s]/gi, '')
  }

  onBlurChange({ target }) {
    let { value } = target;
    const checkValue = value.match(/^\d/);
  }

  render() {
    return (
      <form>
        <PersonalForms onChange={this.handleChange} state={this.state} />
        <ProfissionForms onChange={this.handleChange} state={this.state} />
        <button className='button' onClick={(e) => e.preventDefault()}>Enviar</button>
      </form>
    )
  }
}

export default Forms