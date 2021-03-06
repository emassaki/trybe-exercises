import React from 'react'

export default function Select() {
    const states = ['Selecione um estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    return (
      <label>
        Estado
        <select>
          {states.map(state => <option key={state} value={state}>{state}</option>)}
        </select>
      </label>
    )
}

