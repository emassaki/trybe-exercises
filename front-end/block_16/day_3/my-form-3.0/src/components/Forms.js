import React from 'react';

import PersonalForms from './PersonalForms';
import ProfissionForms from './ProfissionForms';

export default function Forms() {
return (
    <form>
      <PersonalForms />
      <ProfissionForms />
      <button className="button" onClick={(e) => e.preventDefault()}>
        Enviar
      </button>
    </form>
  );
}