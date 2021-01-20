import React from 'react';

class RadioButton extends React.Component {
  render() {
    const { name, value, children } = this.props;
    return (
      <label>
        {children}
        <input type='radio' name={name} value={value}></input>
      </label>
    );
  }
}

export default RadioButton;