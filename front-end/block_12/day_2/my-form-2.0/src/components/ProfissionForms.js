import React from 'react'

import InputText from './InputText';
import TextArea from './TextArea'

class ProfissionForms extends React.Component {
  render() {
    const { onChange, state } = this.props
    return (
      <fieldset>
        <legend>Dados profissionais</legend>
        <TextArea className='text-area' name='resume' value={state.resume} onChange={onChange} maxLength={1000} required>Resumo do currículo: </TextArea>
        <InputText className='input-text' name='role' value={state.role} onChange={onChange} maxLength={40} required>Cargo: </InputText>
        <TextArea className='text-area' name='roleDescription' value={state.roleDescription} onChange={onChange} maxLength={500} required>Descrição do Cargo: </TextArea>
      </fieldset>
    )
  }
}

export default ProfissionForms