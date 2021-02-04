import React from 'react';

class InputText extends React.Component {
  render() {
    const { children, name, value, onChange, maxLength } = this.props;
    let error;

    if (value.length >= maxLength) {
      error = `Limite de ${maxLength} caracteres`;
    }

    return (
      <div className='line-content'>
        <label>
          {children}
          <input
            className=''
            name={name}
            value={value}
            maxLength={maxLength}
            onChange={onChange}
          />
          <span>{error ? error : ''}</span>
        </label>
      </div>
    )
  }
}

export default InputText;