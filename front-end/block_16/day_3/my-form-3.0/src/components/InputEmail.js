import React from 'react';
import { connect } from 'react-redux';
import { emailChange } from '../redux/action';

function InputEmail({ value, onChange }) {
  let error;

  const MAX_LENGTH = 50;

  if (value.length >= MAX_LENGTH) {
    error = `Limite de ${MAX_LENGTH} caracteres`;
  }

  return (
    <div className="line-content">
      <label>
        E-mail:
        <input
          className="input-text"
          name="email"
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
  value: state.formsReducer.email,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(emailChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputEmail);
