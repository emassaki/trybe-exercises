import React from 'react'

import InputText from './InputText';
import RadioButton from './RadioButton';
import Select from './Select';

class PersonalForms extends React.Component {
  render() {
    const { onChange, state } = this.props
    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <InputText className='input-text' name='name' value={state.name} onChange={onChange} maxLength={40} required>Nome: </InputText>
        <InputText className='input-text' name='email' value={state.email} onChange={onChange} maxLength={50} required>E-mail: </InputText>
        <InputText className='input-text' name='CPF' value={state.CPF} onChange={onChange} maxLength={11} required>CPF: </InputText>
        <InputText className='input-text' name='address' value={state.address} onChange={onChange} maxLength={200} required>Endereço: </InputText>
        <InputText className='input-text' name='city' value={state.city} onChange={onChange} maxLength={28} required>Cidade: </InputText>
        <Select required />
        <div>
          <RadioButton name='housing' value='house'>Casa</RadioButton>
          <RadioButton name='housing' value='apartment'>Apartamento</RadioButton>
        </div>
      </fieldset>
    )
  }
}

export default PersonalForms