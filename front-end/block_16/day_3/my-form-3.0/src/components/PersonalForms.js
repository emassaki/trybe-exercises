import React from 'react';

import InputName from './InputName';
import InputEmail from './InputEmail';
import InputCpf from './InputCpf';
import InputAddress from './InputAddress';
import InputCity from './InputCity';
import RadioButton from './RadioButton';
import Select from './Select';

export default function PersonalForms() {
    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <InputName />
        <InputEmail />
        <InputCpf />
        <InputAddress />
        <InputCity />
        <Select required />
        <div>
          <RadioButton name="housing" value="house" checked={true}>
            Casa
          </RadioButton>
          <RadioButton name="housing" value="apartment" checked={false}>
            Apartamento
          </RadioButton>
        </div>
      </fieldset>
    );
}

