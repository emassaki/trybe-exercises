import React from 'react';
import { connect } from 'react-redux';
import { nameChange } from '../redux/action';

function InputName({ value, onChange }) {
  let error;

  const MAX_LENGTH = 40;

  if (value.length >= MAX_LENGTH) {
    error = `Limite de ${MAX_LENGTH} caracteres`;
  }

  return (
    <div className="line-content">
      <label>
        Nome:
        <input
          className="input-text"
          name="name"
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
  value: state.formsReducer.name,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(nameChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputName);
