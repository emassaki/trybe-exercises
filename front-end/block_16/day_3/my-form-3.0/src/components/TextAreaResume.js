import React from 'react';
import { connect } from 'react-redux';
import { resumeChange } from '../redux/action';

function TextAreaResume({ value, onChange }) {
  let error;

  const MAX_LENGTH = 1000;

  if (value.length >= MAX_LENGTH) {
    error = `Limite de ${MAX_LENGTH} caracteres`;
  }

  return (
    <label>
      Currículo:
      <textarea
        className="text-area"
        name="resume"
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
  onChange: (value) => dispatch(resumeChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextAreaResume);
