import React from 'react';

import InputRole from './InputRole';
import TextAreaResume from './TextAreaResume';
import TextAreaRoleDesc from './TextAreaRoleDesc';

export default function ProfissionForms() {
  return (
    <fieldset>
      <legend>Dados profissionais</legend>
      <TextAreaResume />
      <InputRole />
      <TextAreaRoleDesc />
    </fieldset>
  );
}
