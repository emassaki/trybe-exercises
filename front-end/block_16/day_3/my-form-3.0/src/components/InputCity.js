import React from 'react';
import { connect } from 'react-redux';
import { cityChange } from '../redux/action';

function InputCity({ value, onChange }) {
  let error;

  const MAX_LENGTH = 28;

  if (value.length >= MAX_LENGTH) {
    error = `Limite de ${MAX_LENGTH} caracteres`;
  }

  return (
    <div className="line-content">
      <label>
        Cidade:
        <input
          className="input-text"
          name="city"
          value={value}
          maxLength={MAX_LENGTH}
          onChange={(e) => onChange(e.target.value)}
        />
        <span>{error ? error : ''}</span>
      </label>
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.formsReducer.city,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(cityChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputCity);
