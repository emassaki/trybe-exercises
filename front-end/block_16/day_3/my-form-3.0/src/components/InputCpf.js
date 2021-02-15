import React from 'react';
import { connect } from 'react-redux';
import { cpfChange } from '../redux/action';

function InputCpf({ value, onChange }) {
  let error;

  const MAX_LENGTH = 11;

  if (value.length >= MAX_LENGTH) {
    error = `Limite de ${MAX_LENGTH} caracteres`;
  }

  return (
    <div className="line-content">
      <label>
        CPF:
        <input
          className="input-text"
          name="cpf"
          value={value}
          maxLength={MAX_LENGTH}
          onChange={(e) => onChange(e.target.value)}
          required
        />
        <span>{error ? error : ''}</span>
      </label>
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.formsReducer.cpf,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(cpfChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputCpf);
