import React from 'react';
import { connect } from 'react-redux';
import { addressChange } from '../redux/action';

function InputAddress({ value, onChange }) {
  let error;

  const MAX_LENGTH = 200;

  if (value.length >= MAX_LENGTH) {
    error = `Limite de ${MAX_LENGTH} caracteres`;
  }

  return (
    <div className="line-content">
      <label>
        Endereço:
        <input
          className="input-text"
          name="address"
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
  value: state.formsReducer.address,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(addressChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputAddress);
