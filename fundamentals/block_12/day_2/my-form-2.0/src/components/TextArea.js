import React from "react";

class TextArea extends React.Component {
  render() {
    const { children, className, name, value, onChange, maxLength } = this.props;
    let error;

    if (value.length >= maxLength) {
      error = `Limite de ${maxLength} caracteres`;
    }

    return (
      <label>
        {children}
        <textarea
          className={className}
          name={name}
          onChange={onChange}
          maxLength={maxLength}
        />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default TextArea;