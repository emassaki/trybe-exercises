import React from 'react';
import { connect } from 'react-redux';
import { roleDescChange } from '../redux/action';

function TextAreaRoleDesc({ value, onChange }) {
  let error;

  const MAX_LENGTH = 500;

  if (value.length >= MAX_LENGTH) {
    error = `Limite de ${MAX_LENGTH} caracteres`;
  }

  return (
    <label>
      Descrição do cargo:
      <textarea
        className="text-area"
        name="role-description"
        onChange={(e) => onChange(e.target.value)}
        maxLength={MAX_LENGTH}
      />
      <span>{error ? error : ''}</span>
    </label>
  );
}

const mapStateToProps = (state) => ({
  value: state.formsReducer.resume,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(roleDescChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextAreaRoleDesc);
