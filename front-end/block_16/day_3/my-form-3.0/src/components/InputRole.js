import React from 'react';
import { connect } from 'react-redux';
import { roleChange } from '../redux/action';

function InputRole({ value, onChange }) {
  let error;

  const MAX_LENGTH = 40;

  if (value.length >= MAX_LENGTH) {
    error = `Limite de ${MAX_LENGTH} caracteres`;
  }

  return (
    <div className="line-content">
      <label>
        Cargo:
        <input
          className="input-text"
          name="role"
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
  value: state.formsReducer.role,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(roleChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputRole);
